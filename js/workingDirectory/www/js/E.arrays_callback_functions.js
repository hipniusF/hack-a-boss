'use strict';

const userNames = ['Ivan', 'Ana', 'David'];
const userAges = [24, 13, 56];

function createUsers(ages, names) {
	return names.map((name, index) => {
		return { name: name, age: ages[index] };
	});
}

const users = createUsers(userAges, userNames);

users.map((value) => (value.adult = value.age >= 18));

const adultUsers = users.filter((value) => value.adult);

const ageSum = users.reduce((accumulator, currentValue) => {
	return accumulator + currentValue.age;
}, 0);

console.log(users, adultUsers, ageSum);

/*
 */

const dogsInitialList = [true, false, true, true];

const pets = dogsInitialList.map((animal) => {
	return animal ? 'dog' : 'cat';
});

const dogs = pets.filter((animal) => animal === 'dog');
const cats = pets.filter((animal) => animal === 'cat');

const numberOfDogs = pets.reduce((accumulator, currentPet) => {
	return currentPet === 'dog' ? accumulator + 1 : accumulator;
}, 0);

const numberOfCats = cats.length;

console.log(pets, dogs, cats, numberOfDogs, numberOfCats);
