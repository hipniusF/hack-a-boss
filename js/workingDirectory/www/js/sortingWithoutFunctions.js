'use strict';

const toSort = [7, 5, 4, 0, 7, 9, 24, 76, 0, 7];

function sort(input) {
  const arr = [...input];
  for (let i = 0; i < arr.length; i++) {
    let tempVar;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        tempVar = arr[j];
        arr[j] = arr[i];
        arr[i] = tempVar;
      }
    }
  }
  return arr;
}

console.log(sort(toSort));

function checkSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function ramdonSort(input) {
  const arr = [...input];
  let newPost = 0;
  let tempVar = 0;
  while (!checkSort(arr)) {
    for (let i = 0; i < arr.length; i++) {
      newPost = Math.floor(Math.random() * arr.length);
      tempVar = arr[newPost];
      arr[newPost] = arr[i];
      arr[i] = tempVar;
    }
  }
  return arr;
}

console.log(ramdonSort(toSort));
