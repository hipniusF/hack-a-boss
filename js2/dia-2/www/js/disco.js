'use strict';
import { getRandomInt, getRandomColor } from '/js/helpers.js';

const squares = document.querySelectorAll('li');

function changeRandomSquare() {
	let squareNum = getRandomInt(squares.length - 1);
	squares[squareNum].style.background = getRandomColor();
}

function guyJump() {
	let squareNum = getRandomInt(squares.length - 1);
	squares[squareNum].innerHTML = `
		<img src='/media/guy.png'/>
	`;

	setTimeout(() => {
		squares[squareNum].innerHTML = '';
	}, 500);
}

setInterval(() => {
	for (let i = 0; i < 16; i++) {
		changeRandomSquare();
	}
	for (let i = 0; i < 10; i++) {
		guyJump();
	}
}, 500);
