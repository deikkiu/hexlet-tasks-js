const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
];

function getSortedNames(list) {
  const result = [];

  list.forEach((user) => {
    const { name: userName } = user;
    result.push(userName);
  });

  return result.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
}

console.log(getSortedNames(users));
