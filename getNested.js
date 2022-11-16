const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};

function get(obj, item) {
  return item.reduce((p, c) => (p?.hasOwnProperty(c) ? p[c] : null), obj);
}

console.log(get(data, ["hosts", 1, null]));
