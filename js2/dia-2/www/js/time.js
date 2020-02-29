'use strict';

const hourH1 = document.getElementById('time');

function format(number) {
	return (number = number < 10 ? '0' + number : number);
}

function getGreetingFor(hour) {
	if (hour > 8 && hour < 13) return 'Buenos días';
	else if (hour > 13 && hour < 20) return 'Buenas tardes';
	else if (hour < 8) return 'Buenas noches';
}

function printGreeting(hour) {
	const text = document.getElementById('text');
	text.textContent = getGreetingFor(hour);
}

function printTime() {
	const time = new Date();
	let hours = format(time.getHours());
	let minutes = format(time.getMinutes());
	let seconds = format(time.getSeconds());

	hourH1.textContent = `${hours}:${minutes}:${seconds}`;
	printGreeting(hours);
}

setInterval(() => {
	printTime();
}, 200);

printTime();
