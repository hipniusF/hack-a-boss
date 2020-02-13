'use strict';

async function getDataFromServer(server) {
	const jsonFromUrl = await (await fetch(server)).json();
	console.log(jsonFromUrl);
}

getDataFromServer('https://yesno.wtf/api');
getDataFromServer('	https://baconipsum.com/api/?type=meat-and-filler');
