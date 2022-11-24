const pick = (obj, item) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    item.forEach((el) => {
      if (el === key) result[key] = value;
    });
  }

  return result;
};

const data = {
  user: "ubuntu",
  cores: 4,
  os: "linux",
};

console.log(pick(data, ["user", "os"]));
