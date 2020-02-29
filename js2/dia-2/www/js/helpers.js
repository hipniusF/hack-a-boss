export function getRandomInt(max) {
	return Math.round(Math.random() * max);
}

export function getRandomColor() {
	return `rgb(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`;
}
