const sharp = require("sharp");
const imageFile = process.argv[2];

if (!imageFile) {
	console.error("No image specified!");
	process.exit();
}

const output = `greyscale_${imageFile}`;

sharp(imageFile)
	.grayscale()
	.toFile(output, (error, info) => {
		console.log(`acabado, tu imagen esta en ${output}\n\n`);
		console.log(info);
	});
