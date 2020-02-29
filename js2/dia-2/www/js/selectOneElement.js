//getByID

const mainTitle = document.getElementById('title');

mainTitle.style.textAlign = 'center';
mainTitle.style.color = 'red';

// No es necesario ya que se define por defecto al scope global, pero se recomienda por legibildiad
const content = document.getElementById('content');
content.style.color = 'green';

//querySelector

const secondLink = document.querySelector('header > nav ul li:nth-child(2) a');

setTimeout(() => {
	secondLink.style.fontSize = '2rem';
}, 3000);
