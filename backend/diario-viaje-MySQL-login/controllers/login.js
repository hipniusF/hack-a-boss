const { userSchema } = require("./validations/");
const { getConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
async function login(req, res, next) {
	try {
		await userSchema.validateAsync(req.body);
		const { email, password } = req.body;

		const connection = await getConnection();

		const [userDB] = await connection.query(
			`SELECT * FROM users WHERE email=?`,
			[email]
		);

		if (!userDB.length) {
			const error = new Error("Email or password incorrect");
			error.httpCode = 401;
			throw error;
		}
		const user = userDB[0];

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			const error = new Error("Email or password incorrect");
			error.httpCode = 401;
			throw error;
		}

		connection.release();

		const tokenPayload = { id: user.id, role: user.role };
		const token = jwt.sign(tokenPayload, process.env.SECRET, {
			expiresIn: "30 days",
		});

		res.send({
			status: "ok",
			data: { userId: user.id, email: email, token: token },
		});
	} catch (error) {
		next(error);
	}
}

// Registration
async function registration(req, res, next) {
	try {
		await userSchema.validateAsync(req.body);
		const { email, password } = req.body;

		const connection = await getConnection();

		const [
			existingEmail,
		] = await connection.query(`SELECT id FROM users WHERE email=?`, [email]);

		if (existingEmail.length) {
			const error = new Error("Email already in DB");
			error.httpCode = 409;
			throw error;
		}

		const passwordHash = await bcrypt.hash(password, 10);

		const [newUser] = await connection.query(
			`INSERT INTO users (registration_date, email, password, role)
		VALUES (NOW(), ?, ?, "normal")`,
			[email, passwordHash]
		);

		connection.release();
		res.send({
			status: "ok",
			data: { userId: newUser.insertId, email: email },
		});
	} catch (error) {
		next(error);
	}
}

module.exports = { login, registration };
