const users = [
  { name: "Tirion", birthday: "Nov 19, 1988" },
  { name: "Sam", birthday: "Nov 22, 1999" },
  { name: "Rob", birthday: "Jan 11, 1975" },
  { name: "Sansa", birthday: "Mar 20, 2001" },
  { name: "Tisha", birthday: "Feb 27, 1992" },
  { name: "Chris", birthday: "Dec 25, 1995" },
];

const takeOldest = (param, value) => {
  let now = new Date();
  let age;
  return param.filter((el) => {
    let { birthday: brd } = el;
    age = now.getFullYear() - new Date(Date.parse(brd)).getFullYear();
    if (age > value) return el;
  });
};

console.log(takeOldest(users, 25));
