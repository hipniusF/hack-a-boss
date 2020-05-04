const { getDB, resetDB } = require("./db");
const { formatDateToDB } = require("./helpers");

async function main() {
	try {
		await resetDB();
	} catch (error) {
		console.log("The database does not exits yet");
	}

	const db = await getDB();

	await db.exec(`
		CREATE TABLE diary (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			date DATETIME,
			description TEXT,
			place TEXT,
			image TEXT
		)
	`);

	await db.exec(`
		INSERT INTO diary (date, description, place, image)
		VALUES ('${formatDateToDB(
			new Date()
		)}', 'Bonito sitio', 'A Coruña', 'coruña.jpg')
	`);

	await db.exec(`
		INSERT INTO diary (date, description, place, image)
		VALUES ('${formatDateToDB(
			new Date()
		)}', 'Otra visita genial', 'Lugo', 'lugo.png')
	`);

	console.log("Initial data created");

	await db.close();
}

main();
