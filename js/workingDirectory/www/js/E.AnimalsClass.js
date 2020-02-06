'use strict';

class Animals {
  name;
  legs;

  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  sound() {
    console.log('...');
  }
}

class Dog extends Animals {
  constructor(name, legs) {
    super(name, legs);
  }

  sound() {
    console.log('GUAU GUAUGU');
  }
}

class Cat extends Animals {
  constructor(name, legs) {
    super(name, legs);
  }

  sound() {
    console.log('miau miau');
  }
}

class Spider extends Animals {
  constructor(name, legs) {
    super(name, legs);
  }

  sound() {
    console.log('');
  }
}

const myDog = new Dog('boby', 4);
const myCat = new Cat('misi', 4);
const mySpider = new Spider('spider', 8);

console.log(myCat, myDog, mySpider);
