'use strict';

function upperCaseEcho(message) {
  console.log(message.toUpperCase());
}

function lowerCaseEcho(message) {
  console.log(message.toLowerCase());
}

function changeCase(caseFunction) {
  const message = 'AsageasvCbdbcDcEe';
  caseFunction(message);
}

changeCase(upperCaseEcho);
changeCase(lowerCaseEcho);
