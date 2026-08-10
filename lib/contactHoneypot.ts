/** Honeypot field name — must match client form and API validation. */
export const CONTACT_HONEYPOT_FIELD = "website";

export function isContactHoneypotTripped(
  body: Record<string, unknown>,
): boolean {
  const value = body[CONTACT_HONEYPOT_FIELD];
  if (value == null) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  return true;
}
