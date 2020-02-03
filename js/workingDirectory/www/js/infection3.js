'use strict';

const infected = [
  [true, false, true],
  [false, false, true],
  [true, false, false]
];

console.log(infected);
let history = {
  day0: infected
};

function infection(preDay) {
  const infectedOfTheDay = [];
  for (let i = 0; i < preDay.length; i++) {
    infectedOfTheDay[i] = [...preDay[i]];
  }

  for (let i = 0; i < preDay.length; i++) {
    for (let j = 0; j < preDay[0].length; j++) {
      if (preDay[i][j]) {
        if (j !== preDay[0].length - 1) {
          infectedOfTheDay[i][j + 1] = true;
        }
        if (j !== 0) {
          infectedOfTheDay[i][j - 1] = true;
        }
        if (i !== preDay.length - 1) {
          infectedOfTheDay[i + 1][j] = true;
        }
        if (i !== 0) {
          infectedOfTheDay[i - 1][j] = true;
        }
      }
      new Array(5).fill(0);
    }
  }

  for (let i = 0; i < preDay.length; i++) {
    for (let j = 0; j < preDay[0].length; j++) {
      if (preDay[i][j]) {
        infectedOfTheDay[i][j] = false;
      }
    }
  }
  return infectedOfTheDay;
}

function spredingTheInfection(daysPassed) {
  for (let i = 0; i < daysPassed; i++) {
    history['day' + (i + 1)] = infection(history['day' + i]);
  }
}
spredingTheInfection(8);
console.log(history);
