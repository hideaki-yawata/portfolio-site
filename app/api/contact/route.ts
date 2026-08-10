import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isContactHoneypotTripped } from "@/lib/contactHoneypot";
import { enforceContactRateLimit } from "@/lib/contactRateLimit";
import { sanitizeEmailHeaderValue } from "@/lib/sanitizeEmailHeader";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseBody(body: ContactPayload) {
  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return { error: "Invalid request body." as const };
  }

  const name = sanitizeEmailHeaderValue(body.name.trim());
  const email = sanitizeEmailHeaderValue(body.email.trim());
  const message = body.message.trim();

  if (!name || !email || !message) {
    return { error: "All fields are required." as const };
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { error: "One or more fields are too long." as const };
  }

  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." as const };
  }

  return { name, email, message };
}

function buildAutoReplyText(name: string): string {
  return [
    `Hi ${name},`,
    "",
    "Thank you for getting in touch through my portfolio site.",
    "I have received your message and will get back to you as soon as I can.",
    "",
    "Best regards,",
    "Hideaki Yawata",
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (isContactHoneypotTripped(body as Record<string, unknown>)) {
    return NextResponse.json({ ok: true });
  }

  const rateLimit = await enforceContactRateLimit(request);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: rateLimit.error }, { status: 429 });
  }

  const parsed = parseBody(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, message } = parsed;
  const resend = new Resend(apiKey);

  const [ownerResult, autoReplyResult] = await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: toEmail,
      subject: "Thank you for your message",
      text: buildAutoReplyText(name),
    }),
  ]);

  if (ownerResult.error || autoReplyResult.error) {
    console.error("Resend error:", ownerResult.error ?? autoReplyResult.error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
