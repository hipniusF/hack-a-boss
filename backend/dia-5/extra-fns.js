const {
	formatDistance,
	add,
	sub,
	isAfter,
	isBefore,
	isDate,
	isFuture,
	isPast,
	isValid,
} = require("date-fns");
const { es } = require("date-fns/locale");

const date1 = new Date();
const date2 = new Date(date1.getTime() - 1000 * 60 * 60);

const date3 = add(date2, { months: 3 });

console.log(formatDistance(date1, date2, { locale: es }));
console.log(date3);

console.log(`date3 is before date 2?? ${isBefore(date3, date2)}`);
