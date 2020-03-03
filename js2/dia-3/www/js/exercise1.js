'use strict';
const url = 'https://randomuser.me/api/?results=3';

//Async function that will fetch the api and take the data

async function getData(url) {
	const data = await (await fetch(url)).json();
	return data.results;
}

const userArray = getData(url).then((response) => response);

async function setPictures(users) {
	const pictures = document.querySelectorAll('main ul li article header img');
	for (let i = 0; i < pictures.length; i++) {
		const picturesUrl = (await users)[i].picture.large;
		await pictures[i].setAttribute('src', picturesUrl);
	}
}

async function setName(users) {
	const name = document.querySelectorAll('main ul li article header h1');

	for (let i = 0; i < (await users).length; i++) {
		const fullName = (await users)[i].name;
		const formattedName = (await fullName).first + ' ' + (await fullName).last;
		name[i].textContent = await formattedName;
	}
}

async function setEmail(users) {
	const email = document.querySelectorAll('main ul li article p.email');
	console.log(email);

	for (let i = 0; i < (await users).length; i++) {
		const newEmail = (await users)[i].email;
		email[i].textContent = `Email: ${newEmail}`;
	}
}

async function set(element, users) {
	const element = document.querySelectorAll(`main ul li article p.${element}`);
	console.log(element);

	for (let i = 0; i < (await users).length; i++) {
		const newEmail = (await users)[i][element];
		element[i].textContent = `${element}: ${newEmail}`;
	}
}

setPictures(userArray);
setName(userArray);
setEmail(userArray);
set('phone', userArray);
