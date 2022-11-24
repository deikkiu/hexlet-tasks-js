function convert(...arr) {
  return arr.map((el) => {
    return new Date(el).toDateString();
  });
}

console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
