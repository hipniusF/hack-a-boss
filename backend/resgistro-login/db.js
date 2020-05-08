require("dotenv").config();

const mysql = require("mysql2/promise");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let pool;

// Get connection from pool
async function getConnection() {
	console.log(MYSQL_DATABASE);
	if (!pool) {
		pool = await mysql.createPool({
			connectionLimit: 10,
			host: MYSQL_HOST,
			user: MYSQL_USER,
			password: MYSQL_PASSWORD,
			database: MYSQL_DATABASE,
		});
	}

	return await pool.getConnection();
}

module.exports = {
	getConnection,
};
