// Require modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

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
	database: 'notas_frontend'
});

connection.connect((error) => {
	if (error) throw error;
	console.log('DATABASE UP');
});

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/todo', (req, res) => {
	try {
		connection.query(`SELECT * FROM todo_list`, (error, results) => {
			if (error) throw error;

			res.json(results);
		});
	} catch (error) {
		console.log(error);
	}
});

app.put('/todo/update/:id', (req, res) => {
	try {
		const { text } = req.body;
		const { id } = req.params;
		connection.query(`UPDATE todo_list SET text=? WHERE id=?`, [text, id]);

		res.send('Task updated');
	} catch (error) {
		res.send(error);
	}
});

app.delete('/todo/del/:id', (req, res) => {
	res.send('Delete todo');
});

app.post('/todo/new', (req, res) => {
	try {
		const { text } = req.body;
		connection.query(
			`INSERT INTO todo_list (text)
			VALUES(?)`,
			[text]
		);

		res.send('Todo added');
	} catch (error) {
		res.send(error);
	}
});

const PORT = 3050;
app.listen(PORT, () => console.log('API UP'));
