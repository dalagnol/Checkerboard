export function save(key: string, value: any) {
  if (typeof value !== "string") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}
