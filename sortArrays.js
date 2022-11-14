const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const resultArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      resultArray.push(arr1[i]);
    }
  }

  return resultArray;
};

console.log(
  getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])
);
