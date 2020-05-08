require("dotenv").config();

const { getConnection } = require("./db");
const bcrypt = require("bcrypt");

async function main() {
	const connection = await getConnection();

	console.log("Dropping users table");

	await connection.query(`
		DROP TABLE IF EXISTS users
	`);

	console.log("Creating users table");

	await connection.query(`
	CREATE TABLE users (
		id INT PRIMARY KEY auto_increment,
		registration_date DATETIME NOT NULL,
		email VARCHAR(100) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL,
		role ENUM("normal", "admin") DEFAULT "normal" NOT NULL
	)`);

	console.log("Adding admin user");

	const password = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

	await connection.query(`
	INSERT INTO users (registration_date, email, password, role)
	VALUES (NOW(), "marco@marcopg.com", "${password}", "admin")
	`);
	console.log(process.env.DEFAULT_ADMIN_PASSWORD);
	connection.release();
	process.exit();
}

main();
