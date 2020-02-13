'use strict';

function checkPrime(numberToCheck) {
	for (let i = 2; i < numberToCheck; i++) {
		if (numberToCheck % i === 0) {
			return false;
		}
	}
	return true;
}
function writePrimes(numberLimit) {
	let total = 0;
	for (let i = 2; i <= numberLimit; i++) {
		if (checkPrime(i)) {
			console.log(i);
			total++;
		}
	}
	console.log(`Existen ${total} números primos hasta el ${numberLimit}`);
}

writePrimes(10000);
