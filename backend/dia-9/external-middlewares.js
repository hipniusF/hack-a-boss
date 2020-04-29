require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "www")));

app.post("/data", function (req, res) {
	console.log(req.body);

	res.statusCode = 200;
	res.end("Datos recibidos");
});

app.use(function (req, res) {
	res.statusCode = 404;
	res.end("<h1> 404 Not found! </h1>");
});

app.listen(process.env.PORT);
