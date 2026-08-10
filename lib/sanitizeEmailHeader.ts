/** Removes control chars and line breaks for safe use in email headers (e.g. Subject). */
export function sanitizeEmailHeaderValue(value: string): string {
  return value
    .replace(/[\0-\x1F\x7F]/g, "")
    .replace(/\u2028|\u2029/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
