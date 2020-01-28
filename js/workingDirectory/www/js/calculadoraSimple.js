'use strict';

let method = 'elseIf';

let operation = prompt('Ingresa tu operacióin (suma, multiplicación, división, resta, resto):');

let number1 = +prompt('Ingresa tu primer número:');
let number2 = +prompt('Ingresa tu segundo número:');

if (method === 'elseIf') {
  if (operation === 'suma') {
    console.log(number1 + number2);
  } else if (operation === 'multiplicación') {
    console.log(number1 * number2);
  } else if (operation === 'división') {
    console.log(number1 / number2);
  } else if (operation === 'resta') {
    console.log(number1 - number2);
  } else if (operation === 'resto') {
    console.log(number1 % number2);
  } else {
    console.log('Operación no reconocida, comprueba la sintaxis.');
  }
} else if (method === 'switch') {
  switch (operation) {
    case 'suma':
      console.log(number1 + number2);
      break;

    case 'multiplicación':
      console.log(number1 * number2);
      break;

    case 'división':
      console.log(number1 / number2);
      break;

    case 'resta':
      console.log(number1 - number2);
      break;

    case 'resto':
      console.log(number1 % number2);
      break;

    default:
      console.log('Operación no reconocida, comprueba la sintaxis.');
      break;
  }
} else {
  console.log('Método no reconocido');
}
