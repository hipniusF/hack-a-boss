'use strict';

// Nota: innecesario but whatever
const { innerHeight, innerWidth, outerHeight, outerWidth } = window;

//Ancho viewport
console.log(`El viewport tiene un ancho de ${innerWidth}px y un alto de ${innerHeight}px`);

//Ancho ventana
console.log(`La ventana tiene un ancho de ${outerWidth} y un alto de ${outerHeight}`);

//Location
console.log(`
	-Url actual: ${location.href}
	-Conexión segura: ${location.protocol === 'https' ? 'Si' : 'No'}
	-Path: ${location.pathname}
	-Hash: ${location.hash}
`);

//Navigator
console.log(`-Tu navegador ${navigator.userAgent}`);

/* setInterval(() => {
	console.log(`Scroll: ${scrollY}`);
}, 1000); */

// alert('Hola');

const google = open('https://google.com');

setTimeout(() => {
	google.close();
}, 2000);
