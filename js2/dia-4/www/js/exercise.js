'use strict';

const button = document.querySelector('h1');

button.addEventListener('mouseover', handlerMove);
document.addEventListener('keypress', stopMovement);

function handlerMove() {
	button.style.top = `${randomNumber(window.innerHeight - 150)}px`;
	button.style.left = `${randomNumber(window.innerWidth - 100)}px`;
}

function randomNumber(max) {
	return Math.round(Math.random() * max);
}

function stopMovement() {
	button.removeEventListener('mouseover', handlerMove);
}

function keylog(key) {
	stopMovement();
}
