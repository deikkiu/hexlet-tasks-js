const fill = (obj1, value, obj2) => {
  let result = { ...obj1 };
  if (value.length === 0) {
    Object.assign(result, obj1, obj2);
  }

  for (const item of value) {
    if (result.hasOwnProperty(item) && obj2.hasOwnProperty(item)) {
      result[item] = obj2[item];
    }
  }

  return result;
};
