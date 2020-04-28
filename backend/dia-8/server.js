require("dotenv").config();
const http = require("http");
const urlParser = require("url");
const fs = require("fs").promises;
const path = require("path");

const port = process.env.PORT;

const server = http.createServer();

server.on("request", async function (request, response) {
	let body = [];

	request
		.on("error", (error) => {
			console.log(error);
		})
		.on("data", (chunk) => {
			body.push(chunk);
		})
		.on("end", async () => {
			const { url, method, headers } = request;
			/* 	body = Buffer.concat(body).toString();

			const query = urlParser.parse(url, true).query;

			console.log("Path:", url);
			console.log("Method:", method);
			console.log("Headers:", headers);
			console.log("Query:", query);
			console.log("Body:", body);

			response.statusCode = 200;
			response.setHeader("Content-Type", "application/json");

			response.end(JSON.stringify({ url, method, headers, query, body }));
		 */

			if (method === "GET" && (url === "/" || "/index.html")) {
				const data = await fs.readFile(
					path.join(__dirname, "www/index.html"),
					"utf-8"
				);

				response.statusCode = 200;
				response.setHeader("Content-type", "text/html");
				response.end(data);
			} else if (method === "GET" && url === "/main.js") {
				const data = await fs.readFile(
					path.join(__dirname, "www/main.js"),
					"utf-8"
				);

				response.statusCode = 200;
				response.setHeader("Content-type", "application/javascript");
				response.end(data);
			} else if (method === "GET" && url === "/data") {
				const data = await fs.readFile(
					path.join(__dirname, "guestbook.json"),
					"utf-8"
				);

				response.statusCode = 200;
				response.setHeader("Content-type", "application/json");
				response.end(data);
			} else if (method === "POST" && url === "/data") {
			} else {
				response.statusCode = 404;
				response.setHeader("Content-type", "text/plain");
				response.end("Not found");
			}
		});
});

server.listen(port);
console.log(`Servidor web escuchando en http://127.0.0.1:${port}`);
