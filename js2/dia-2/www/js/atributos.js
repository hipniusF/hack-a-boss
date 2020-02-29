'use strict';

import { getRandomColor } from '/js/helpers.js';

const input = document.querySelector('[name="name"]');
const button = document.querySelector('button');

input.setAttribute('type', 'password');
button.setAttribute('disabled', 'yes');
button.setAttribute('id', 'button');

console.log(input.hasAttribute('lang'), input.hasAttribute('name'));
button.removeAttribute('disabled');

const headerLinks = document.getElementsByClassName('link-header');

for (const link of headerLinks) {
	const dataset = link.dataset;
	for (const data in dataset) {
		link.style[data] = dataset[data];
	}
}

const title = document.querySelector('h1');

title.style.textAlign = 'center';

// SOBREESCRIBE aquello existente en la propiedad style
title.style.cssText = `
	border-bottom: 2px solid gold;
	color: white;
	background: rebeccapurple;
`;

// title.setAttribute('style', 'color: blue');

console.log(getComputedStyle(title));
