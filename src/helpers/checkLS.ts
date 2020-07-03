export function checkLS(keys: Array<string>, values: any) {
  const LSKeys = Object.keys(localStorage);
  const LSValues = Object.values(localStorage);

  LSKeys.forEach((key, i) => {
    if (keys.includes(key)) {
      if (values[key].length) {
      }
    } else {
      localStorage.removeItem(key);
    }
  });
}
