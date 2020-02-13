'use strict';

const arr = [5, 8, 7, 6, 2, 4];

const increased = arr.map((value) => value + 2);

for (const value of arr) {
	if (value === 10) {
		break;
	}
}

const greaterThanFive = arr.filter((value) => value >= 5);

const reducer = (accumulator, currentValue) => {
	return accumulator + currentValue;
};

const reducedArray = arr.reduce(reducer);

console.log(reducedArray, increased, greaterThanFive);
