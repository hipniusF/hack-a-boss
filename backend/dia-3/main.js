const cowsay = require("cowsay");
const arguments = process.argv.slice(2);

console.log(
	cowsay.think({
		text: arguments.join(" ") || "No digo nada",
		e: "oO",
	})
);
