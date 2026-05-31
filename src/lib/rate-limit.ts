type RateRecord = { count: number; resetTime: number };

const store = new Map<string, RateRecord>();

const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function rateLimit(ip: string): { success: boolean } {
  const now = Date.now();
  const record = store.get(ip);

  if (!record || now > record.resetTime) {
    store.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { success: true };
  }

  if (record.count >= LIMIT) return { success: false };

  record.count++;
  return { success: true };
}
