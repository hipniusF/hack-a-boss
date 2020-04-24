const minimist = require("minimist");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;

const arg = minimist(process.argv.slice(2));

async function transformImagesToMiniatures(inputDir, outputDir, size) {
	try {
		const inputStats = await fs.stat(inputDir);
		if (!inputStats.isDirectory()) {
			throw new Error("inputDir must be a directory");
		}

		const inputFiles = await fs.readdir(inputDir);

		try {
			await fs.mkdir(outputDir);
		} catch (error) {}

		for (const file of inputFiles) {
			const fileRoute = path.join(inputDir, file);

			const ext = path.extname(fileRoute);

			if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
				const image = sharp(fileRoute);

				image.resize(size).toFile(path.join(outputDir, `miniature-${file}`));
			}
		}
	} catch (error) {
		console.error(error);
	}
}

transformImagesToMiniatures(arg.inputDir, arg.outputDir, arg.size);
