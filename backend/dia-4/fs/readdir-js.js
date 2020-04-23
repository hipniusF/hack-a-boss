const fs = require("fs").promises;
const path = require("path");
const argParser = require("minimist");

// Mostar información sobre los contenidos del directorio
async function listDirectoryInfo(pathName) {
	try {
		//comrpuebo si el directoio existe y si es un directorio
		const data = await fs.stat(pathName);
		if (!data.isDirectory()) {
			throw new Error(`La ruta ${pathName} no corresponde con un directorio`);
		}

		const contents = await fs.readdir(pathName);

		for (const name of contents) {
			const route = path.join(pathName, name);
			const routeInfo = await fs.stat(route);

			if (routeInfo.isFile()) {
				console.log(
					`El tamaño del fichero ${name} es de ${routeInfo.size} bytes`
				);
			} else {
				console.log(`${name} es un directorio`);
			}
		}
	} catch (error) {
		console.error(error);
	}
}

const arguments = argParser(process.argv.slice(2));
console.log(arguments);
listDirectoryInfo(path.resolve(arguments.directory));
