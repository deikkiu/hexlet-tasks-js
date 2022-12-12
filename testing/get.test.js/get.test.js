import { get } from "get.js";
import { strict as assert } from "assert";

assert.equal(get({ hello: "world" }, "hello", "kitty"), "world");
assert.equal(get({}, "hello", "kitty"), "kitty");
