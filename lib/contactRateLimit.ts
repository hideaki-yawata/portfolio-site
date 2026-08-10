import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function createContactRateLimiter(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return null;
  }

  return new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    prefix: "portfolio-contact",
  });
}

let contactRateLimiter: Ratelimit | null | undefined;

function getContactRateLimiter(): Ratelimit | null {
  if (contactRateLimiter === undefined) {
    contactRateLimiter = createContactRateLimiter();
  }
  return contactRateLimiter;
}

export async function enforceContactRateLimit(
  request: Request,
): Promise<{ allowed: true } | { allowed: false; error: string }> {
  const limiter = getContactRateLimiter();
  if (!limiter) {
    return { allowed: true };
  }

  const { success } = await limiter.limit(getClientIp(request));
  if (!success) {
    return {
      allowed: false,
      error: "Too many requests. Please try again in an hour.",
    };
  }

  return { allowed: true };
}
