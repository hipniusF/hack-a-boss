require("dotenv").config();
const express = require("express");
const app = express();

app.use(function (req, res, next) {
	console.log(`La url solicitada es ${req.url}`);
	next();
});

app.use(function (req, res, next) {
	if (req.headers.auth === "loremipsum") {
		next();
	} else {
		res.statusCode = 401;
		res.end("No se puede pasar");
	}
});

app.use(function (req, res) {
	res.statusCode = 200;
	res.end("Llegaste hasta el final");
});

app.listen(process.env.PORT);
