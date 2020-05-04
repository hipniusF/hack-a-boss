const { getDB } = require("../db");
const { formatDateToDB } = require("../helpers");

async function listEntries(req, res, next) {
	const db = await getDB();

	const entries = await db.all("SELECT * FROM diary ORDER BY date DESC");
	res.send({
		status: "ok",
		data: entries,
	});
}

async function newEntry(req, res, next) {
	const db = await getDB();

	try {
		const { place, description } = req.body;

		if (!place || !description) {
			const error = new Error(
				"Required fields place and description are missing"
			);

			error.httpCode = 400;
			throw error;
		}

		await db.run(`
		INSERT INTO diary (date, description, place, image)
		VALUES ('${formatDateToDB(
			new Date()
		)}', '${description}', '${place}', 'coruña.jpg')
	`);

		res.send({ status: "ok", data: [place, description] });
	} catch (error) {
		next(error);
	}
}

async function deleteEntry(req, res, next) {
	const db = await getDB();
	const { id } = req.params;

	await db.run(`
		DELETE FROM diary WHERE id = ${id}
	`);
	res.send({ status: "ok", data: `Se ha eliminado con exito la entra ${id}` });
}

module.exports = {
	listEntries,
	newEntry,
	deleteEntry,
};
