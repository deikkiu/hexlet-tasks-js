function groupBy(array, prop, result = {}) {
  array.forEach((el) => {
    if (hasOwnProperty.call(el, prop)) {
      (result[el[prop]] ||= []).push(el);
    }
  });

  return result;
}

const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
];

console.log(groupBy(students, "mark"));
