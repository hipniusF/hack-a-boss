const { format } = require("date-fns");
const { es } = require("date-fns/locale");

const dateDB = new Date();

const formattedDate = format(dateDB, "d 'de' MMMM 'del' yyyy 'a las' H:mm", {
	locale: es,
});

console.log(formattedDate);
