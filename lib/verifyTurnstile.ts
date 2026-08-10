import { getClientIp } from "@/lib/contactRateLimit";

type SiteverifyResponse = {
  success?: boolean;
};

export async function verifyTurnstileToken(
  request: Request,
  token: unknown,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: true };
  }

  if (typeof token !== "string" || !token.trim()) {
    return {
      ok: false,
      error: "Verification failed. Please try again.",
    };
  }

  const params = new URLSearchParams({
    secret,
    response: token.trim(),
    remoteip: getClientIp(request),
  });

  let data: SiteverifyResponse;
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      },
    );
    data = (await response.json()) as SiteverifyResponse;
  } catch {
    return {
      ok: false,
      error: "Verification failed. Please try again.",
    };
  }

  if (!data.success) {
    return {
      ok: false,
      error: "Verification failed. Please try again.",
    };
  }

  return { ok: true };
}
