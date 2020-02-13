'use strict';

// function factorial(numberToShout) {
//   if (numberToShout === 1 || numberToShout === 0) {
//     return 1;
//   }
//   return factorial(numberToShout - 1) * numberToShout;
// }
// console.log(factorial(5));

// function badFactorial(numberToShout) {
//   if (numberToShout === 0) {
//     return 1; //MAGIC NUMBER, WARNING!!!
//   }
//   let result = numberToShout;
//   for (let i = numberToShout - 1; i > 1; i--) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(badFactorial(5);

function fib(numberToFib) {
	if (numberToFib <= 1) {
		return numberToFib;
	}
	return fib(numberToFib - 1) + fib(numberToFib - 2);
}
console.log(fib(87));
