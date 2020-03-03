const section = document.querySelector('#main');

section.innerHTML = `
	<ul>
		<li>uno</li>
		<li>dos</li>
	</ul>
`;
const list = document.querySelector('section ul');

const newli = document.createElement('li');
newli.innerHTML = '<strong>tres</strong>';
list.append(newli);

const thirdli = document.createElement('li');
thirdli.textContent = 'new';

const lis = Array.from(list.querySelectorAll('li'));
console.log(lis[1]);
const choosenli = lis.filter(0item) => item.textContent === 'dos');
choosenli.textContent = 'hola';
