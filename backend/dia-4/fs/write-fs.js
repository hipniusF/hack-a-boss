const fs = require("fs").promises;
const path = require("path");

async function writeFile(path, content) {
	try {
		await fs.writeFile(path, content);
	} catch (error) {
		console.error(error);
	}
}

writeFile(path.join(__dirname, "lorem.txt"), "lorem ipsum dolor sit amet!");
