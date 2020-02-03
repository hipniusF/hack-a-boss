'use strict';

const infected = [true, false, true, false, false, false, true, true];

let history = {
  day0: infected
};

function infection(preDay) {
  let infectedOfTheDay = [...preDay];

  for (let i = 0; i < preDay.length; i++) {
    if (preDay[i]) {
      if (preDay[i] !== 0) {
        infectedOfTheDay[i - 1] = true;
      }
      if (preDay[i] !== preDay.length - 1) {
        infectedOfTheDay[i + 1] = true;
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
