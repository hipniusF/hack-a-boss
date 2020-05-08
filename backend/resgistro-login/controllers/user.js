require("dotenv").config();

const { userSchema } = require("./validations");
const { getConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res, next) {
	try {
		await userSchema.validateAsync(req.body);

		const connection = await getConnection();
		const { email, password } = req.body;

		const [existing] = await connection.query(
			`
		SELECT id FROM users WHERE email=?`,
			[email]
		);

		if (existing.lenght) {
			const error = new Error("The email already exist on the database");
			error.httpCode = 409;
			throw error;
		}

		const passwordHash = await bcrypt.hash(password, 10);
		const [result] = await connection.query(
			`
	INSERT INTO users (registration_date, email, password, role)
	VALUES (NOW(), ?, ?, "normal")`,
			[email, passwordHash]
		);

		res.send({
			status: "ok",
			data: { id: result.insertId, email: email, role: "normal" },
		});
	} catch (error) {
		next(error);
	}
}

async function login(req, res, next) {
	try {
		userSchema.validate(req.body);

		const connection = await getConnection();
		const { email, password } = req.body;

		const [user] = await connection.query(
			`
			SELECT * FROM users WHERE email=?`,
			[email]
		);

		console.log(email, user);

		if (!user.length) {
			const error = new Error(
				"The email does not exist or the password is not correct"
			);

			error.httpCode = 401;
			throw error;
		}

		const passwordMatch = await bcrypt.compare(password, user[0].password);

		if (!passwordMatch) {
			const error = new Error(
				"The email does not exist or the password is not correct"
			);

			error.httpCode = 401;
			throw error;
		}

		// Build jsonwebtoken

		const tokenPayload = { id: user[0].id, role: user[0].role };
		const token = jwt.sign(tokenPayload, process.env.SECRET, {
			expiresIn: "30 days",
		});

		res.send({
			status: "ok",
			message: "Login succesful",
			data: { userId: user[0].id, email: email, token: token },
		});
	} catch (error) {
		next(error);
	}
}

async function info(req, res, next) {
	try {
		const { id } = req.params;
		const connection = await getConnection();

		const [
			result,
		] = await connection.query(
			`SELECT id, registration_date, email FROM users where id=?`,
			[id]
		);

		console.log(result.length);

		if (!result.length) {
			const error = new Error(`There is no user with the id ${id}`);
			error.httpCode = 404;
			throw error;
		}

		connection.release;
		res.send({ status: "ok", data: result[0] });
	} catch (error) {
		next(error);
	}
}

module.exports = {
	register,
	login,
	info,
};
