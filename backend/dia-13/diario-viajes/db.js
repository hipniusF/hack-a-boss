require("dotenv").config();

const mysql = require("mysql2/promise");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let pool;

async function connectToDB() {
	pool = mysql.createPool({
		connectionLimit: 10,
		host: MYSQL_HOST,
		user: MYSQL_USER,
		password: MYSQL_PASSWORD,
		database: MYSQL_DATABASE,
	});

	try {
		const testConnection = await pool.getConnection();
		testConnection.release();
	} catch (error) {
		console.error(error.message);
	}
}

async function getConnection() {
	if (!pool) {
		throw new Error("Mysql not connected");
	}

	return apool.getConnection();
}

module.exports = {
	connect,
	getConnection,
};
