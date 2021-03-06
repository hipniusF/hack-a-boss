require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

// Controllers
const { listEntries, newEntry, deleteEntry } = require("./controllers");

// Log middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(bodyParser.json());

// Routes
app.get("/entries", listEntries);
app.post("/entries", newEntry);
app.delete("/entries/:id", deleteEntry);

// Error middleware
app.use((error, req, res, next) => {
	console.log(error);
	res
		.status(error.httpCode || 500)
		.send({ status: "error", message: error.message });
});

// Not found middleware
app.use((req, res) => {
	res.status(404).send({ status: "error", data: "Not found" });
});

app.listen(port, () => {
	`Servidor funcionando en http://127.0.0.1:${port}`;
});
