'use strict';

const body = document.body;
const button = document.querySelector('button');
const p = document.querySelector('p');

window.onload = function() {
	body.style.background = 'steelblue';
};

function writeClicks() {
	p.textContent = 'Clicks totales: ' + clicks;
}

let clicks = 0;

button.onclick = () => {
	console.log('ClickyTiClick');
	clicks++;
	writeClicks();
};

p.onclick = () => {
	clicks = 0;
	writeClicks();
};
