const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const imageBuffer = fs.readFileSync(path.join(__dirname, "./images/pic3.jpg"));

const image = sharp("./images/pic1.jpg");
const image2 = sharp(path.join(__dirname, "./images/pic2.jpg"));
const image3 = sharp(imageBuffer);

image.resize(300).toFile("./images/pic-small.jpg", function (error) {
	console.error(error);
});
