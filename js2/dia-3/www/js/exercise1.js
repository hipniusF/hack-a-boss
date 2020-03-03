'use strict';
const url = 'https://randomuser.me/api/?results=3';

//Get data from API

async function getData(url) {
	const data = await (await fetch(url)).json();
	return data.results;
}

const userArray = getData(url).then((response) => response);

//Set user pictures
async function setPictures(users) {
	const pictures = document.querySelectorAll('main ul li article header img');
	for (let i = 0; i < pictures.length; i++) {
		const picturesUrl = (await users)[i].picture.large;
		await pictures[i].setAttribute('src', picturesUrl);
	}
}

//Set user names
async function setName(users) {
	console.log((await users)[1]);
	const name = document.querySelectorAll('main ul li article header h1');

	for (let i = 0; i < (await users).length; i++) {
		const fullName = (await users)[i].name;
		const formattedName = (await fullName).first + ' ' + (await fullName).last;
		name[i].textContent = await formattedName;
	}
}

//Set any element of the body of the user
async function set(elementToChange, users) {
	let element = document.querySelectorAll(`main ul li article p.${elementToChange}`);
	const initialLength = element.length;

	for (let i = 0; i < (await users).length; i++) {
		if (initialLength === 0) {
			element = [];
			element[i] = document.createElement('p');
			element[i].classList.add(elementToChange, 'upper');
			const article = document.querySelectorAll(`main ul li article`);
			article[i].append(element[i]);
		}
		const newData = (await users)[i][elementToChange];
		element[i].textContent = `${elementToChange}: ${newData}`;
	}
}

setPictures(userArray);
setName(userArray);
set('email', userArray);
set('phone', userArray);
set('cell', userArray);
set('gender', userArray);
