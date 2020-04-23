const fs = require("fs").promises;
const path = require("path");

async function mkdir(path) {
	try {
		await fs.mkdir(path, { recursive: true });
		console.log(`El directorio ${path} fue creado`);
	} catch (error) {
		if (error.code === "EEXIST") {
			console.log("El directorio ya existe");
		} else {
			console.error(error);
		}
	}
}

mkdir(path.join(__dirname, "dir"));
