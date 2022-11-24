function convert(...arr) {
  const res = [];

  arr.forEach((el) => {
    res.push(new Date(el).toDateString());
  });

  return res;
}

console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
