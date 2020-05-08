require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const { register, login, info } = require("./controllers/user");
const { onlyUsers, onlyAdmin } = require("./controllers/protected");
const { userAuthenticated, userIsAdmin } = require("./middlewares/auth");

const port = process.env.PORT;

const app = express();

//Add common middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/users", register);
app.post("/users/login", login);
app.get("/users/:id", info);

app.get("/only-users", userAuthenticated, onlyUsers);
app.get("/only-admin", userAuthenticated, userIsAdmin, onlyAdmin);

app.use((error, req, res, next) => {
	res
		.status(error.httpCode || 500)
		.send({ status: "error", message: error.message });
});

app.use((req, res) => {
	res.status(404).send("not found");
});

app.listen(port, () => {
	console.log(`Server listening request on http://127.0.0.1:${port}`);
});
