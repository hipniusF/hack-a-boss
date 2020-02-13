'use strict';

function randomizeAnimal() {
	if (Math.round(Math.random())) {
		return new Fox();
	} else {
		return new Chicken();
	}
}
class Room {
	animalList = [];

	constructor(animal1, animal2) {
		this.animalList.push(animal1, animal2);
	}

	openRoom() {
		if (this.animalList[0].constructor.name === this.animalList[1].constructor.name) {
			this.animalList.push(this.animalList[0].breed());
		} else {
			if (this.animalList[0] instanceof Fox) {
				this.animalList = this.animalList[0].eat(this.animalList);
			} else {
				this.animalList = this.animalList[1].eat(this.animalList);
			}
		}
		console.log(this.animalList);
	}
}

class Animal {}

class Chicken extends Animal {
	breed() {
		return new Chicken();
	}
}

class Fox extends Animal {
	breed() {
		return new Fox();
	}
	eat(room) {
		return room.filter((animal) => animal instanceof Fox);
	}
}

const animal1 = randomizeAnimal();
const animal2 = randomizeAnimal();

const myRoom = new Room(animal1, animal2);
myRoom.openRoom();
