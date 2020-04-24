const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function savePNGminiature(imagePath, outputPath) {
	try {
		const outputDir = path.join(__dirname, outputPath);

		const image = sharp(imagePath);

		image.resize(200, 200);

		await image.toFile(outputDir);
	} catch (error) {
		console.error(error);
	}
}

savePNGminiature("./images/pic3.jpg", "./images/miniature.png");
