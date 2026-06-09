const store = new Map<string, { count: number; reset: number }>();

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
): { allowed: boolean } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.reset) {
    store.set(ip, { count: 1, reset: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= limit) {
    return { allowed: false };
  }

  entry.count++;
  return { allowed: true };
}
