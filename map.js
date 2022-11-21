function make() {
  return new Map();
}

function set(map, key, value) {
  if (value) return (map["key"] = value);
  else return false;
}

function get(map, key, default_value = null) {
  if (default_value) {
    return set(map, key, default_value);
  }

  if (!default_value) {
    if (map["key"] !== null) return map["key"];
    else return default_value;
  }
}
