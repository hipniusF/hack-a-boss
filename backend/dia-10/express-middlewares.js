require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();

app.use((req, res, next) => {
	req.initialTime = new Date();
	next();
});

app.use((req, res, next) => {
	console.log(req.url);
	next();
});

app.use((req, res, next) => {
	const differenceInMiliseconds =
		new Date().getTime() - req.initialTime.getTime();

	res.send(
		`Tardó ${differenceInMiliseconds}ms in complete all the middlewares`
	);
});

app.listen(port, () => {
	console.log(`Servidor web funcionando en http://127.0.0.1:${3000}`);
});
