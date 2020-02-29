'use strict';
import { getRandomColor } from '/js/helpers.js';

//getElementsByClassName (open)
const headerLinks = document.getElementsByClassName('link-header');

for (const link of headerLinks) {
	link.style.color = getRandomColor();
}

//getElementsByTagName (open)
const parrf = document.getElementsByTagName('p');

for (const p of parrf) {
	p.style.textDecoration = 'underline';
}

//querySelectorAll (close)
const headerChilds = document.querySelectorAll('header > *');

for (const headerChild of headerChilds) {
	headerChild.style.background = 'steelblue';
}
