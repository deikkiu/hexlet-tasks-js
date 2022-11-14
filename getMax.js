const getMax = (arr) => {
  let [value, ...rest] = arr;

  for (let curr of rest) {
    if (value < curr) {
      value = curr;
    }
  }

  return value;
};
