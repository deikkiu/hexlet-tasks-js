function groupBy(array, prop) {
  const obj = {};

  array.forEach((el) => {
    if (el.hasOwnProperty(prop)) {
      return (obj[el[prop]] ||= []).push(el);
    }
  });

  return obj;
}

const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
];

console.log(groupBy(students, "mark"));
