'use strict';

const tweetTextArea = document.getElementById('tweet');
const button = document.getElementById('button');
const tweetsList = document.getElementById('tweetsList');
const clear = document.getElementById('clear');

clear.addEventListener('click', clearList);

function addTweet(text) {
	const li = document.createElement('li');
	li.textContent = text;
	tweetsList.prepend(li);
}

button.addEventListener('click', handlerClick);
document.addEventListener('keypress', keypress);

function keypress(key) {
	if (key.key === 'Enter') {
		handlerClick();
	}
}

function handlerClick(event) {
	if (event !== undefined) {
		event.preventDefault();
	}

	const text = tweetTextArea.value.trim();
	if (text) {
		addTweet(text);
	}
	tweetTextArea.value = '';
}

function clearList() {
	const lastTweet = tweetsList.querySelector(':first-child');
	tweetsList.removeChild(lastTweet);
}
