const fs = require("fs").promises;
const path = require("path");

async function deleteFile(path) {
	try {
		await fs.unlink(path);
	} catch (error) {
		console.error(error);
	}
}

deleteFile(path.join(__dirname, "lorem.txt"));
