export function checkLS(keys: Array<string>, values: any) {
  const LSKeys = Object.keys(localStorage);
  const LSValues = Object.values(localStorage);

  LSKeys.forEach((key, i) => {
    if (key === "users") {
      if (
        JSON.stringify(Object.keys(values.user)) !==
        JSON.stringify(Object.keys(JSON.parse(LSValues[i])[0]))
      ) {
        localStorage.removeItem("users");
      }
    } else if (keys.includes(key)) {
      if (values[key].length) {
        if (!values[key].includes(LSValues[i])) {
          localStorage.removeItem(key);
        }
      } else if (typeof values[key] === "string") {
        if (!(typeof JSON.parse(LSValues[i]) === values[key])) {
          localStorage.removeItem(key);
        }
      } else if (values[key] === null || values[key] === undefined) {
        if (!(JSON.parse(LSValues[i]) === values[key])) {
          localStorage.removeItem(key);
        }
      } else if (
        JSON.parse(LSValues[i]) &&
        JSON.stringify(Object.keys(values[key])) !==
          JSON.stringify(Object.keys(JSON.parse(LSValues[i])))
      ) {
        localStorage.removeItem(key);
      }
    } else {
      localStorage.removeItem(key);
    }
  });
}
