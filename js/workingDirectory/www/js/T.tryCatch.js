'use strict';

let workerAge = 15;
try {
	if (workerAge < 18) {
		throw 'Under age';
		console.log('Llega?');
	}
} catch (error) {
	if ((error = 'Under age')) {
		workerAge = 18;
	}
} finally {
	console.log('Pues era mayor de edad ->', workerAge);
}

console.log('Llego hasta aquí');
