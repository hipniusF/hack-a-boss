'use strict';

/* Tenemos sospechosos y detectives, cada un uno clase
perteneciente a una clase persona.
-Clase persona: nombre
-Sospechosos: nombre, color de ojos, altura, tatuaje(si/no)
      cada sospechoso tiene 1 pista sobre el culpable. 
      el tip es privado*/

const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];
const tip = [
  {
    height: 'alto'
  },
  {
    eyeColor: 'marron'
  },
  {
    tattooed: false
  }
];

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Criminal extends Person {
  #tip;

  constructor(name, eyeColor, heigth, tattooed, tip) {
    super(name);
    this.eyeColor = eyeColor;
    this.heigth = heigth;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  confess() {
    return this.#tip;
  }
}

class Detective extends Person {
  tipsList = {};
  constructor(name) {
    super(name);
  }

  getTipOf(criminal) {
    this.tipsList = { ...this.tipsList, ...criminal.confess() };
  }

  interrogateAllCriminals() {
    for (const criminal of criminalList) {
      this.getTipOf(criminal);
    }
  }

  getCulpable() {
    for (const criminal of criminalList) {
      if (this.checkCriminal(criminal, this.tipsList)) {
        return criminal;
      }
    }
  }
}

const criminalList = names.map((name, index) => {
  return new Criminal(name, eyeColor[index], height[index], tattooed[index], tip[index]);
});

const detective = new Detective('bob');

detective.interrogateAllCriminals();
// console.log(detective.getCulpable());

console.log(detective);
console.log(criminalList);
