'use strict';

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function writePrimes(number) {
  for (let i = 1; i <= number; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

writePrimes(79);
