require("dotenv").config();

const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT;

// Controllers
const { userAuthenticated, userIsAdmin } = require("./controllers/auth");

const { login, registration } = require("./controllers/login");

const {
	listEntries,
	newEntry,
	getEntry,
	deleteEntry,
	editEntry,
	voteEntry,
	getEntryVotes,
} = require("./controllers/diary");

// Console logger middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(bodyParser.json());

// Multipart parsing middleware
app.use(fileUpload());

// CORS middleware
app.use(cors());

// Serve static
app.use(express.static(path.join(__dirname, "static")));

// Routes

app.post("/users", registration);
app.post("/users/login", login);

app.get("/entries", listEntries);
app.post("/entries", userAuthenticated, newEntry);

app.get("/entries/:id", getEntry);
app.get("/entries/:id/votes", getEntryVotes);
app.post("/entries/:id/votes", userAuthenticated, voteEntry);
app.put("/entries/:id", userAuthenticated, userIsAdmin, editEntry);
app.delete("/entries/:id", userAuthenticated, userIsAdmin, deleteEntry);

// Error middleware
app.use((error, req, res, next) => {
	console.log(error);
	res.status(error.httpCode || 500).send({
		status: "error",
		message: error.message,
	});
});

// Not found middleware
app.use((req, res) => {
	res.status(404).send({ status: "error", message: "Not found" });
});

app.listen(port, () => {
	console.log(`Servidor funcionando en http://localhost:${port} 🚀`);
});
