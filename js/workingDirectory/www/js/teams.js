'use strict';

function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function compareMedia(a, b) {
  const mediaA = a.media();
  const mediaB = b.media();
  let comparasion;
  if (mediaA < mediaB) {
    comparasion = 1;
  } else if (mediaA > mediaB) {
    comparasion = -1;
  }
  return comparasion;
}

const team = [
  {
    name: 'Equipo Maria',
    points: [62, 34, 55],
    media: function() {
      return sumArray(this.points) / this.points.length;
    }
  },
  {
    name: 'Equipo Paula',
    points: [35, 60, 59],
    media: function() {
      return sumArray(this.points) / this.points.length;
    }
  },
  {
    name: 'Equipo Rebeca',
    points: [40, 39, 63],
    media: function() {
      return sumArray(this.points) / this.points.length;
    }
  }
];

let winnerTeam = team.sort(compareMedia)[0];
console.log(`¡¡¡¡Enorabuena ${winnerTeam.name}!!!!. ¡¡¡HAS GANADO!!`);
