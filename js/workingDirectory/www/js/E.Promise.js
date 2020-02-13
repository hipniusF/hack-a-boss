'use strict';

const myPass = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('134');
	}, Math.random() * 1000);
});

const serverHash = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('1234');
	}, Math.random * 1000);
});

const promiseArray = [myPass, serverHash];

Promise.all(promiseArray).then((passwords) => {
	if (passwords[0] === passwords[1]) {
		console.log('Access granted');
	} else {
		console.log('Access denied');
	}
});
