'use strict';

function buildSquare(size) {
  const square = [];
  for (let i = 0; i < size; i++) {
    square.push(new Array(size).fill(' '));
  }
  return square;
}

function drawX(size) {
  const square = buildSquare(size);

  for (let i = 0; i < size; i++) {
    square[i][i] = i < 2 ? '■' : ' ';
    square[i][size - 1 - i] = '■';
  }
  return square;
}

console.log(drawX(5));
