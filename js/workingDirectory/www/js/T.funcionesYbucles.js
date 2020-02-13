'use strict';

/* puede ser llamada aunque la función sea declarada 
 posteriormente en código */

function1();

function function1() {
	console.log('Function 1');
}

// tiene que declararse antes de ser llamada

const function2 = function() {
	console.log('Function 2');
};

function2();

//FUNCIONES CON PARAMETROS

function add(term1, term2) {
	return term1 + term2;
}

let resultado = add(1, 2);
console.log(resultado);

//AMBITO DE UNA FUNCIÓN (para esto borrar 'use strict' principal)

function sinStrict() {
	return this;
}

function conStrict() {
	'use strict';
	return this;
}

console.log(sinStrict());
console.log(conStrict());

//BUCLES

let value = 1;
while (value <= 0) {
	console.log('otra vuelta');
	value++;
}

do {
	console.log('hola');
	value++;
} while (value <= 0);

for (let i = 0; i < 7; i++) {
	console.log(i);
	if (i === 2) {
		continue;
	}
	if (i === 5) {
		break;
	}
	console.log('Esto también está en el bucle');
}
