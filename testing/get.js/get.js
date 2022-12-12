const __hasProp = Object.prototype.hasOwnProperty;

const get = (obj, key, value) => {
  return __hasProp.call(obj, key) ? obj[key] : value;
};

console.log(get({}, "hello", "kitty"));

module.exports = { get, __hasProp };
