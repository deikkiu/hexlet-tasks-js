const today = new Date();

function make(name, obj) {
  return { name, state: "moderating", createdAt: today, ...obj };
}

const company = make("Hexlet", { website: "hexlet.io", state: "published" });

console.log(company);
