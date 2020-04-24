const { parse } = require("date-fns");
const { es } = require("date-fns/locale");

const f1 = "23:45 del 03 de marzo de 2020";
const f2 = "12:00 del 12 de febrero de 1985";

console.log(
	parse(f1, "HH:mm 'del' dd 'de' MMMM 'del' yyyy", new Date(), { locale: es })
);
