require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const morgan = require("morgan");
const path = require("path");

const {
	dataControler,
	dataPostControler,
	userPhotoControler,
} = require("./controlers");

const { basicMiddleware, authMiddleware } = require("./middlewares");

const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.resolve(__dirname, "static")));

app.get("/data", basicMiddleware, dataControler);
app.post("/data", authMiddleware, dataPostControler);

app.get("/user/:userId/photo/:cathegory", userPhotoControler);

app.use((error, req, res, next) => {
	res.status(500).send("Hubo un error");
});

app.use((req, res, next) => {
	res.status(404).send("Not found");
});

app.listen(port, () => {
	console.log(`Servidor web funcionando en http://127.0.0.1:${path}`);
});
