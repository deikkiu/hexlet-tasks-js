const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

function addSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(addSpread(flatten([1, [3, 2], 9]), flatten([1, [[2], [3]], [9]])));

console.log(flatten([1, [3, 2], 9]));
console.log(flatten([1, [[2], [3]], [9]]));
