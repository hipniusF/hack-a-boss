const { connectToDB, getConnection } = require("./db");

async function main() {
	// Delete db if exists
	// USE WITH CAUTION
	try {
		await connectToDB();

		const connection = getConnection();

		// Create table
		await connection.query(`
    CREATE TABLE diary IF NOT EXISTS(
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      date DATETIME NOT NULL,
      description TEXT NOT NULL,
      place TEXT NOT NULL,
      image TEXT
    )
  `);

		await connection.query(`
    CREATE TABLE diary_votes IF NOT EXISTS(
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      entry_id INTEGER NOT NULL,
      vote INTEGER NOT NULL,
      date DATETIME NOT NULL,
      ip TEXT NOT NULL
    )
  `);

		console.log("Initial structure created");

		await db.close();
	}
}

main();
