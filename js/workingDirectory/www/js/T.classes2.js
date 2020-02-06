'use strict';

const userNames = ['Ivan', 'Ana', 'David'];
const userAges = [24, 13, 56];

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.adult = age >= 18;
  }

  generateID(id) {
    this.ID = id;
  }
}

class UserList {
  allUsers = [];
  constructor(names, ages) {
    for (let i = 0; i < names.length; i++) {
      this.allUsers.push(new User(names[i], ages[i]));
    }
  }

  getAdultUsers() {
    return this.allUsers.filter((user) => user.adult);
  }

  generateIDFromAllUsers() {
    for (let i = 0; i < this.allUsers.length; i++) {
      this.allUsers[i].generateID(i);
    }
  }
}

const userList = new UserList(userNames, userAges);
userList.generateIDFromAllUsers();
console.log(userList);
