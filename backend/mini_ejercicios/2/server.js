const http = require("http");

const server = http.createServer();
const { formatDistance } = require("date-fns");
const { es } = require("date-fns/locale");

const backDate = new Date(2020, 6, 30);

server.on("request", (request, response) => {
	if (request.url === "/freedom") {
		const distance = formatDistance(backDate, new Date(), { locale: es });
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/json");
		response.end(
			JSON.stringify({
				message: `Faltan ${distance} para la libertad`,
			})
		);
	} else {
		response.statusCode = 404;
		response.end("404Not found");
	}
});

server.listen(3000);
