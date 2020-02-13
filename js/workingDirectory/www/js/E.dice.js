'use strict';

let point = 0;
let roll = 0;
let scoreToWin = 50;

function dice() {
	for (let i = 0; point < scoreToWin; i++) {
		roll = Math.ceil(Math.random() * 6);
		point += roll;

		console.log(`Tirada ${i}: ha salido un ${roll}. Tienes un total de ${point} puntos`);
	}

	console.log(`¡Enhorabuena, ha salido un ${roll}! ¡Has ganado con un total de ${point} puntos!`);
}

dice();
