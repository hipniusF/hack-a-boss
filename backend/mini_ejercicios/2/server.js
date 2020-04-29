const http = require("http");

const server = http.createServer();
const { formatDistance } = require("date-fns");
const { es } = require("date-fns/locale");

const backDate = new Date(2020, 6, 30);

server.on("request", (request, response) => {
	const distance = formatDistance(backDate, new Date(), { locale: es });

	console.log(request.url);

	if (request.url === "/freedom") {
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/json");
		response.end(
			JSON.stringify({
				message: `Faltan ${distance} para la libertad`,
			})
		);
	}
});

server.listen(3000);
