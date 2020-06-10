// Require modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('secret', secret);

// MYSQL connection
const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'hipnius',
	password: '124578',
	database: 'clients'
});

connection.connect((error) => {
	if (error) throw error;
	console.log('DATABASE UP');
});

app.get('/', (req, res) => {
	res.send('Hi world');
});

// Get clients
app.get('/clients', (req, res) => {
	connection.query(`SELECT * FROM clients_list`, (error, results) => {
		if (error) throw error;
		res.json(results);
	});
});

// Add client
app.post('/clients/add', (req, res) => {
	try {
		const { name, surname, city, company } = req.body;

		connection.query(
			`INSERT INTO clients_list (name, surname, city, company)
			VALUES (?, ?, ?, ?)`,
			[name, surname, city, company]
		);

		res.send('Client added successfully');
	} catch (error) {
		console.log(error);
	}
});

// Delete client
app.delete('/clients/del/:id', (req, res) => {
	try {
		const { id } = req.params;

		connection.query(`DELETE FROM clients_list WHERE id=?`, [id]);

		res.send('Client removed successfully');
	} catch (error) {
		console.log(error);
	}
});

// Login
app.post('/auth', (req, res) => {
	// Get data passed by the user
	const { user, password } = req.body;

	// Get data from the DB
	connection.query(`SELECT * FROM users WHERE username=? and password=?`, [user, password], (error, results) => {
		if (error) throw error;
		if (results.length) {
			const payload = { check: true, isAdmin: results[0].isAdmin };

			const token = jwt.sign(payload, app.get('secret'), {
				expiresIn: '15 day'
			});

			res.send({ message: 'Login successful', token: token });
		} else {
			console.log('Username or password incorrect');
		}
	});
});

const PORT = 3050;
app.listen(PORT, () => console.log('API UP'));
