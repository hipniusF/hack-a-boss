'use strict';

const listFibonacci = {
  0: 0,
  1: 1
};

function fibonacci(n) {
  if (listFibonacci[n] || n === 0) {
    return listFibonacci[n];
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(40));
