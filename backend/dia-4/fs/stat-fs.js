const fs = require("fs").promises;
const path = require("path");

async function fileInfo(path) {
	try {
		const info = await fs.stat(path);
		console.log(`El fichero tiene un tamaño de ${info.size}`);
		console.log(`El fichero fue creado el ${info.birthtime}`);
		console.log(`El fichero fue modificado por última vez el ${info.mtime}`);

		console.log(`Es un fichero: ${info.isFile()}`);
		console.log(`Es un archivo: ${info.isDirectory()}`);
		console.log("-----------");
		console.log("-----------");

		console.log(info);
	} catch (error) {
		console.error(error);
	}
}

fileInfo(path.join(__dirname, "fichero.txt"));
