'use strict';

const button = document.querySelector('button');
const body = document.body;

button.addEventListener('mouseover', handlerMove);
button.addEventListener('click', handlerClick);
body.addEventListener('dblclick', handlerStopMovement);

function handlerClick() {
	const winText = document.createElement('h1');
	winText.textContent = 'CONGRATULATIONS!!!!';
	winText.style.fontSize = '5rem';
	body.append(winText);

	button.setAttribute('hidden', 'yes');

	setTimeout(reload, 2000);
}

function handlerMove() {
	button.style.top = `${randomNumber(window.innerHeight - 100)}px`;
	button.style.left = `${randomNumber(window.innerWidth - 150)}px`;
}

function handlerStopMovement(event) {
	if (event.ctrlKey) {
		button.removeEventListener('mouseover', handlerMove);
	}
}

function randomNumber(max) {
	return Math.round(Math.random() * max);
}

function reload() {
	window.location.reload(false);
}
