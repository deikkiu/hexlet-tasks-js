const cloneDeep = (obj) => {
  const result = Array.isArray(obj) ? [] : {};

  let value;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result[key] =
        typeof value === "object" && value !== null ? cloneDeep(value) : value;
    }
  }

  return result;
};
