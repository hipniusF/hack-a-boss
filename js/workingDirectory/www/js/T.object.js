'use strict';

/*const yo = {
  name: 'Marco',
  address: {
    street: 'Los asdfasdfasdf',
    houseNumber: '37',
    city: '42',
    country: 'spain'
  },
  age: 16,
  pets: null,
  adult: function() {
    return this.age > 18;
  },
  parents: {
    father: 'asdfadf',
    mother: 'asdfasdf'
  }
};

const yoCopy = { ...yo };
console.log(yoCopy === yo);*/

const test = {};
test.a = {};
test.b = test.a;

console.log(test);
