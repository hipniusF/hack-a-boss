require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.end("Hola amigas");
});

app.post("/contact", function (req, res) {
	res.end("Página de contacto");
});

app.use((error, req, res, enxt) => {
	res.statusCode = 500;
	res.end(`Ocurrió este error ${error.message}`);
});
app.use((req, res) => {
	res.statusCode = 404;
	res.end("Página no encontrada");
});
app.listen(process.env.PORT);
