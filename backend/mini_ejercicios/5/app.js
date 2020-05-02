const fs = require("fs").promises;
const path = require("path");

const files = process.argv.splice(2);

async function echoDataIfSizeLess(file, maxSize) {
	const size = (await fs.stat(file)).size;

	if (size <= maxSize) {
		const content = await fs.readFile(file, "utf-8");
		console.log(`Content of ${file}:\n`);
		console.log(content);
		console.log("---------------\n");
	} else {
		console.log(`The file of ${file} is more than ${maxSize}`);
	}
}

async function printFiles(files) {
	for (const file of files) {
		const filePath = path.resolve(file);

		await echoDataIfSizeLess(filePath, 10000);
	}
}

printFiles(files);
