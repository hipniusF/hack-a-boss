const { getConnection } = require("./db");
const { formatDateToDB } = require("./helpers");
const faker = require("faker/locale/es");
const bcrypt = require("bcrypt");

const { random } = require("lodash");

const args = process.argv;

const addData = args[2] === "--data";

async function main() {
	// Get reference to db
	const connection = await getConnection();

	console.log("Dropping tables");
	await connection.query("DROP TABLE IF EXISTS diary");
	await connection.query("DROP TABLE IF EXISTS diary_votes");
	await connection.query("DROP TABLE IF EXISTS users");

	// Create table

	await connection.query(`
		CREATE TABLE diary_votes (
			id INT PRIMARY KEY AUTO_INCREMENT,
			entry_id INTEGER NOT NULL,
			vote INT NOT NULL,
			date DATETIME NOT NULL,
			ip VARCHAR(100) NOT NULL
			)`);

	await connection.query(`
		CREATE TABLE users (
			id INT PRIMARY KEY auto_increment,
			registration_date DATETIME NOT NULL,
			email VARCHAR(100) NOT NULL UNIQUE,
			password VARCHAR(255) NOT NULL,
			role ENUM("normal", "admin") DEFAULT "normal" NOT NULL
			)`);

	await connection.query(`
		CREATE TABLE diary (
			id INT PRIMARY KEY AUTO_INCREMENT,
			date DATETIME NOT NULL,
			description VARCHAR(100) NOT NULL,
			place VARCHAR(100) NOT NULL,
			image VARCHAR(100),
			user_id INT,
			CONSTRAINT fk_diary_users FOREIGN KEY (user_id)	REFERENCES users(id)
			)
			`);

	const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

	await connection.query(
		`INSERT INTO users (registration_date, email, password, role)
		VALUES (NOW(), "marco@marcopg.com", "${password}", "admin")`
	);

	if (addData) {
		console.log("Adding initial data");
		const entries = 10;

		for (let index = 0; index < entries; index++) {
			await connection.query(`
		INSERT INTO diary (date, description, place) 
		VALUES ("${formatDateToDB(
			faker.date.recent()
		)}", "${faker.lorem.sentence()}", "${faker.address.city()}")
	`);
		}

		const votes = 100;
		for (let index = 0; index < votes; index++) {
			await connection.query(`
		INSERT INTO diary_votes (entry_id, vote, date, ip) 
		VALUES ("${random(1, entries)}", "${random(1, 5)}", "${formatDateToDB(
				faker.date.recent()
			)}", "${faker.internet.ip()}")
		`);
		}
	}
	console.log("Initial structure created");

	connection.release();
	process.exit();
}

main();
