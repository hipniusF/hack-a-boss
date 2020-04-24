console.log("Momento actual:".toUpperCase());

const now = new Date();
console.log(now);
console.log(now.getTime());

console.log("\n\nOtras fechas:".toUpperCase());

console.log("Pasandole el UNIX time:");
const date1 = new Date(1000 * 60 * 60 * 24);
console.log(date1);

console.log("Pasandole un string:");
const date2 = new Date("September 2 1976 07:00");
console.log(date2);

console.log("Mediante valores numéricos:");
const date3 = new Date(2000, 0, 1, 17, 30, 00, 00);
console.log(date3);
