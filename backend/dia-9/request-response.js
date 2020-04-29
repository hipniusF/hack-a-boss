require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
	const ip = req.ip;
	const route = req.path;
	const query = req.query;

	console.log(ip, route, query);
	res.set("X-Powered-By", "H-tech");
	res.status(200).send("<h1>HOLA</h1>");
	res.sendFile(path.join(__dirname, "/www/css/style.css"));
});

app.use((req, res) => {
	res.statusCode = 404;
	res.end("Página no encontrada");
});

app.listen(process.env.PORT);
