export function maxChar(text: string, count: number) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}
