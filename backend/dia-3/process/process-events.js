let count = 1;

process.on("exit", () => {
	console.log(`\n\n\n El proceso se acabo, la cuenta llegó a ${count}`);
});

process.on("uncaughtException", (error) => {
	console.log("Ocurrió un error grave");
	console.log(error.message);
});

setInterval(() => {
	console.log(`click ${count}`);
	count++;

	if (count > 3) {
		throw new Error("La cuenta es muy grande");
	}

	if (count > 10) {
		process.exit();
	}
}, 500);
