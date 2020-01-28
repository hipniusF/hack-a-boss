'use strict';

function makeFloor1(sizeOfFloor) {
  let floor = '*';
  for (let j = 0; j < sizeOfFloor; j++) {
    floor += '*';
  }
  console.log(floor);
}

function printPyramide1(size) {
  for (let i = 0; i < size; i++) {
    makeFloor1(i);
  }
}
printPyramide1(10);

function makeFloor2(sizeOfFloor, sizePyramide) {
  let floor = '';

  for (let j = sizePyramide - sizeOfFloor; j !== 0; j--) {
    floor += ' ';
  }
  for (let j = 0; j < sizeOfFloor; j++) {
    floor += '*';
  }
  console.log(floor);
}
function printPyramide2(sizePyramide) {
  for (let i = 0; i < sizePyramide; i++) {
    makeFloor2(i, sizePyramide);
  }
}
printPyramide2(10);

function makeFloor3(sizeOfFloor, sizePyramide) {
  let floor = '';

  for (let j = sizePyramide - sizeOfFloor; j > 0; j--) {
    floor += ' ';
  }
  for (let j = 0; j < /*--->*/ 2 * sizeOfFloor - 1 /*<----*/; j++) {
    //ECUACIÓN DE LA SUCESIÓN
    floor += '*';
  }
  console.log(floor);
}
function printPyramide3(sizePyramide) {
  for (let i = 0; i < sizePyramide; i++) {
    makeFloor3(i, sizePyramide);
  }
}
printPyramide3(10);
