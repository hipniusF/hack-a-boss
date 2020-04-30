const express = require("express");
const app = express();

const names = require("./names.json");

app.get("/names", (req, res) => {
	const gender = req.query.gender;
	let namesRequested = names;

	if (gender) {
		namesRequested = names.filter((name) => name.gender === gender);
	}

	res.status(200);
	res.send(namesRequested);
});

app.get("/random", (req, res) => {
	const randomIndex = Math.floor(Math.random() * names.length);

	res.status(200);
	res.send(names[randomIndex]);
});

app.use((req, res) => {
	res.sendStatus(404);
	res.send("404 Not found");
});

app.listen(3000);
