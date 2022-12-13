const __hasProp = Object.prototype.hasOwnProperty;

function groupBy(array, prop, result = {}) {
  array.forEach((el) => {
    if (__hasProp.call(el, prop)) {
      result[el[prop]] ? result[el[prop]].push(el) : (result[el[prop]] = [el]);
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
