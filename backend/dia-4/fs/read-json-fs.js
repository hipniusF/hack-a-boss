const fs = require("fs");

const jsonData = fs.readFileSync("./provincias.json");

const json = JSON.parse(jsonData.toString());

console.log(json);

const jsonEasy = require("./provincias.json");
console.log(jsonEasy);
