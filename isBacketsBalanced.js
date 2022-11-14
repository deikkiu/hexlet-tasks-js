const isBalanced = (s) => {
  if (s.length % 2 !== 0) return false;

  let stack = [];
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
    ">": "<",
  };

  for (const symbol of s) {
    if (isClosed(symbol)) {
      if (brackets[symbol] !== stack.pop()) return false;
    } else {
      stack.push(symbol);
    }
  }

  return stack.length === 0;
};

function isClosed(ch) {
  return [")", "}", "]", ">"].indexOf(ch) > -1;
}

console.log(isBalanced("(<>){[]}[]"));
