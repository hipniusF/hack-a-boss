const fs = require("fs").promises;
const path = require("path");

async function fileExists(path) {
	try {
		await fs.access(path);
	} catch (error) {
		if (error.code === "ENOENT") {
			console.log("La ruta no existe");
		} else {
			console.error(error);
		}
	}
}

fileExists(path.join(__dirname, "lorem.txt"));
