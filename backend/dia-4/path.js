const path = require("path");

// normalize
console.log(path.normalize("/home/marco/Documents/../programas"));

// join
const libPath = "./lib";
console.log(__dirname + libPath);
console.log(path.join(__dirname, libPath));

// resolve
console.log(path.resolve("./lib"));

// dirname
console.log(path.dirname("/home/hw/imagen.jpg"));

// extname
console.log(path.extname("/home/hw/imagen.jpg"));

// parse
console.log(path.parse("/home/hw/imagen.jpg"));
