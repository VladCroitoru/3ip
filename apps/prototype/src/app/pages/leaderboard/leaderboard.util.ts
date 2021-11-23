export function toKg(grams: number): number {
  return grams / 1000;
}

export function toKm(meters: number): number {
  return meters / 1000;
}

export function toHours(seconds: number): string {
  const hours = seconds / 3600;
  return String(hours).substring(0, 4);
}
