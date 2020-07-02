export function load(key: string) {
  const res = localStorage.getItem(key);

  try {
    return key === "grid" ? res : res && JSON.parse(res);
  } catch {
    return res;
  }
}
