'use strict';

const toSort = [7, 5, 4, 0, 7, 9, 24, 76, 0, 7];
const toSort2 = [...toSort];

function greater(a, b) {
  return a - b;
}

const sorted = toSort.sort(greater);

const sorted2 = toSort2.sort((a, b) => a - b);

console.log(sorted);
console.log(sorted2);
