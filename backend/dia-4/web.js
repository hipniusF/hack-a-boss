const http = require("http");
const db = require("./lib/db.js");

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.statusCode = 200;
		response.setHeader("Content-type", "application/json");
		response.end(JSON.stringify(db));
	} else {
		response.statusCode = 404;
		response.setHeader("Content-type", "text/html");
		response.end("<strong>Not found!</strong>");
	}
});

server.listen(3000, "127.0.0.1", () => {
	console.log("el servidor esta funcioando en http://127.0.0.1:3000");
});
