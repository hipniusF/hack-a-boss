const { formatDistance } = require("date-fns");
const { es } = require("date-fns/locale");
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, ".lastUpdate.txt");

async function main() {
	try {
		const data = await fs.readFile(filePath, "utf-8");

		console.log(
			`Este programa fue ejecutado por última vez hace ${formatDistance(
				new Date(),
				new Date(data),
				{ locale: es }
			)}`
		);
	} catch (error) {
		console.log("Es la primera vez que ejecutas este programa");
	} finally {
		await fs.writeFile(filePath, new Date());
	}
}

main();
