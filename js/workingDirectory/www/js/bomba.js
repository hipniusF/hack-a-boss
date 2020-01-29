'use strict';

/*USEFUL FUNCTION:
  prompt() 
  Math.ramdom
  Math.round
  Math.ceil
  Math.floor
*/

// function defuseBomb() {
//   const numberToGuess = Math.round(Math.random() * 10);
//   let guess;
//   for (let i = 0; i < 5; i++) {
//     guess = +prompt(`Introduce un número (${i+1}/5 intentos)`);
//     if (guess === numberToGuess) {
//       return true;
//     } else {
//       console.log('Has fallado, prueba otra vez');
//       if (guess < numberToGuess) {
//         console.log('Te has quedado corto');
//       } else {
//         console.log('Te has pasado;');
//       }
//     }
//   }
//   return false;
// }

// if (defuseBomb()) {
//   console.log('HAS ACERTADO!!! Bomba desactivada');
// } else {
//   console.log('BOOOMMM!!');
// }

function pista(guess, numberToGuess) {
  if (guess < numberToGuess) {
    console.log('Te has quedado corto');
  } else {
    console.log('Te has pasado');
  }
}

function checkNumber(guess, numberToGuess) {
  if (guess === numberToGuess) {
    return true;
  } else {
    console.log('Has fallado, prueba otra vez');
    pista(guess, numberToGuess);
  }
  return false;
}

function defuseBomb() {
  const numberToGuess = Math.ceil(Math.random() * 10);
  let guess;
  for (let i = 0; i < 5; i++) {
    guess = +prompt(`Introduce un número del 1 al 10 (${i + 1}/5 intentos)`);
    if (checkNumber(guess, numberToGuess)) {
      return true;
    }
  }
  return false;
}

function playBomb() {
  if (defuseBomb()) {
    console.log('HAS ACERTADO!!! Bomba desactivada');
  } else {
    console.log('BOOOMMM!!');
  }
}

playBomb();
