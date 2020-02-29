'use strict';

const body = document.body;

const p = document.createElement('p');
p.textContent = 'Párrafo creado desde JS';
p.style.color = 'green';

body.prepend(p);

const favoriteFruits = ['platano', 'manzana', 'cereza', 'kiwi'];

const ul = document.createElement('ul');

for (const fruit of favoriteFruits) {
	const li = document.createElement('li');
	li.textContent = fruit;
	ul.append(li);
}

body.append(ul);

const liMelocoton = document.createElement('li');
liMelocoton.textContent = 'melocoton';

const cereza = ul.querySelector('li:nth-child(3)');
ul.insertBefore(liMelocoton, cereza);
cereza.remove();
body.remove();
