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

  constructor(name, eyeColor, height, tattooed, tip) {
    super(name);
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  static createList(names, eyeColors, heights, tattooeds, tips) {
    return names.map((names, index) => {
      return new Criminal(names, eyeColors[index], heights[index], tattooeds[index], tips[index]);
    });
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

  checkCriminal(criminal) {
    for (let i = 0; i < Object.keys(this.tipsList).length; i++) {
      if (criminal[Object.keys(this.tipsList)[i]] !== Object.values(this.tipsList)[i]) {
        return false;
      }
    }
    return true;
  }

  getCulpable() {
    for (const criminal of criminalList) {
      if (this.checkCriminal(criminal)) {
        return criminal;
      }
    }
  }
}

const criminalList = Criminal.createList(names, eyeColor, height, tattooed, tip);
const detective = new Detective('bob');

detective.interrogateAllCriminals();
console.log(detective.getCulpable());
