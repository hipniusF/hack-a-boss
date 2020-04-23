const fs = require("fs").promises;
const path = require("path");

async function deleteDir(path) {
	try {
		await fs.rmdir(path);
	} catch (error) {
		if (error.code == "ENOTEMPTY") {
			console.log("El directorio no está vacío");
		} else {
			console.error(error);
		}
	}
}

deleteDir(path.join(__dirname, "dir"));
