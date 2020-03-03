'use strict';

const body = document.body;
const button = document.querySelector('button');

//addEventLister
button.addEventListener('click', function() {
	console.log('Clicky');
});

button.addEventListener('click', function() {
	console.log('Tycliky');
});

function handlerMouseOver() {
	console.log('MOUSER OVER');
}

button.addEventListener('mouseover', handlerMouseOver);

//removeEventListener
button.removeEventListener('mouseover', handlerMouseOver);
