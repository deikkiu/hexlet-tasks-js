function bubbleSort(array) {
  let testing;
  do {
    testing = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const a = array[i];
        array[i] = array[i + 1];
        array[i + 1] = a;
        testing = true;
      }
    }
  } while (testing);

  return array;
}
console.log(bubbleSort([3, 2, 10, -2, 0]));
