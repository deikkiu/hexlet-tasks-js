function takeLast(str, n) {
  return str.trim() === ""
    ? null
    : str.length < n
    ? null
    : [...str].slice(-n).reverse().join("");
}

console.log(takeLast("power", 4));
