const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
	if (new Date().getHours() < 14) {
		res.status(200).send("Hola");
	} else {
		next();
	}
});

app.use((req, res) => {
	res.status(404).send("<h1>Not found!</h1>");
});

app.listen(3000);
