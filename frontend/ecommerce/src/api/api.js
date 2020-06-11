// Require modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const app = express();

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MYSQL connection
const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'hipnius',
	password: '124578',
	database: 'hackamarket'
});

connection.connect((error) => {
	if (error) throw error;
	console.log('DATABASE UP');
});

app.get('/', (req, res) => {
	res.send('Hi world');
});

// Get products
app.get('/products', (req, res) => {
	try {
		connection.query(`SELECT * FROM productos`, (error, response) => {
			if (error) throw error;

			res.send(response);
		});
	} catch (error) {
		console.log(error);
	}
});

// Get clients
app.get('/clients', (req, res) => {
	try {
		connection.query(`SELECT * FROM clientes`, (error, response) => {
			res.send(response);
		});
	} catch (error) {
		console.log(error);
	}
});

// Add clients
app.post('/clients', (req, res) => {
	try {
		const { name, surname, city, company } = req.body;

		connection.query(
			`INSERT INTO clientes (nombre, apellido, ciudad, empresa)
			VALUES (?, ?, ?, ?)`,
			[name, surname, city, company]
		);
		res.send('Client added successfully');
	} catch (error) {
		console.log(error);
	}
});

// Edit client
app.put('/client/:id', (req, res) => {
	try {
		const { name, surname, city, company } = req.body;
		const { id } = req.params;

		connection.query(
			`UPDATE clientes SET
			nombre=?,
			apellido=?,
			ciudad=?,
			empresa=? WHERE id=?`,
			[name, surname, city, company, id]
		);

		res.send('Edited successfully');
	} catch (error) {
		console.log(error);
	}
});

// Delete client
app.delete('/client/:id', (req, res) => {
	try {
		const { id } = req.params;
		connection.query(`DELETE FROM clientes WHERE id=?`, [id]);

		res.send('Deleted successfully');
	} catch (error) {
		console.log(error);
	}
});

// Login
app.post('/login', (req, res) => {
	try {
		const { email, password } = req.body;

		connection.query(`SELECT * FROM usuarios WHERE email=? and password=?`, [email, password], (error, response) => {
			if (error) throw error;

			if (response.length) {
				const payload = { isAdmin: response[0].admin, email: response[0].email };
				const token = jwt.sign(payload, secret);

				res.send({ status: 'Athenticated', token: token });
			} else {
				console.log('Email or password incorrect');
			}
		});
	} catch (error) {
		console.log(error);
	}
});

// Register
app.post('/register', (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error('The email and password must be filled');
		}

		connection.query(
			`INSERT INTO usuarios (email, password, admin)
			VALUES (?, ?, 0)`,
			[email, password]
		);

		res.send('Register successful');
	} catch (error) {
		console.log(error);
	}
});

app.listen(3050);
