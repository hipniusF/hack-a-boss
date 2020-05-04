require("dotenv").config();
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const path = require("path");
const fs = require("fs-extra");

const dbPath = path.resolve(process.env.DB_NAME);
async function getDB() {
	return open({
		filename: dbPath,
		driver: sqlite3.cached.Database,
	});
}

async function resetDB() {
	await fs.unlink(dbPath);
}

module.exports = {
	getDB,
	resetDB,
};
