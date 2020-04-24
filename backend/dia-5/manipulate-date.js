console.log("MOMENTO ACTUAL:");
const date = new Date(-156168416512);
console.log(date);

console.log(`El año actual es ${date.getFullYear()}`);
console.log(`El mes actual es ${date.getMonth()}`);
console.log(`El día del mes actual es ${date.getDate()}`);
console.log(`El día de la semana actual es ${date.getDay()}`);
console.log(`La hora actual es ${date.getHours()}`);
console.log(`Los minutos son ${date.getMinutes()}`);
console.log(`Los segundos son ${date.getSeconds()}`);
console.log(`Los milisegundos son ${date.getMilliseconds()}`);

date.setFullYear(1985);
date.setDate(30);
