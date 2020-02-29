'use strict';

import { getRandomColor } from '/js/helpers.js';

const section = document.querySelector('#content');

// parentesco
console.log(section.children); //hijos
console.log(section.parentElement); //padres
console.log(section.firstElementChild); //primer hijo
console.log(section.lastElementChild); //ultimo hijo
console.log(section.lastElementChild.previousElementSibling); //hermano anterior
console.log(section.firstElementChild.nextElementSibling); //hermano siguiente

const p = document.querySelector('section > p');

//Segundo link del header

const secondLinkHeader =
	p.parentElement.parentElement.parentElement.children[2].lastElementChild.firstElementChild.children[1]
		.firstElementChild;
console.log(secondLinkHeader);
