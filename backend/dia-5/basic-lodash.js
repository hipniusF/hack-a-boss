const { concat, flattenDeep } = require("lodash");

const a = [1, 2, 3];
const deep = [1, [3, [4, "b"], 2], [2, 3, [(4)[[1, "patat"]]]]];

console.log(concat(a, 4, [5, "pikachu"]));
console.log(flattenDeep(deep));
