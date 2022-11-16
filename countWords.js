const countWords = (str) => {
  const result = {};
  if (str === "") return result;

  const arr = str
    .toLowerCase()
    .split(" ")
    .forEach((el) => {
      result.hasOwnProperty(el) ? (result[el] += 1) : (result[el] = 1);
    });

  return result;
};

console.log(countWords("another one sentence with strange Words wOrds"));
