interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/**
 * Naive in-memory rate limiter. Suitable for single-instance / low-volume use
 * (e.g. a portfolio contact form). On serverless, buckets reset between cold
 * starts — swap for Upstash Redis or similar if real abuse appears.
 */
export function rateLimit(
  key: string,
  max = 5,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= max) return false;
  bucket.count += 1;
  return true;
}
