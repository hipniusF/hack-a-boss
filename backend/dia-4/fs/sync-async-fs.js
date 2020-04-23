const fs = require("fs");
const path = require("path");

// Escribir a un fichero

//		version asincrona:

fs.writeFile(path.join(__dirname, "fichero.txt"), "Hello world!", (error) => {
	if (error) {
		console.error(error);
	} else {
		console.log("ya está escrito");
	}
});

console.log("Escribiendo...");

// 		version sincrona:

fs.writeFileSync(path.join(__dirname, "fichero2.txt"), "Hello world!");
console.log("ya está escrito");
