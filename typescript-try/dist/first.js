"use strict";
let age = 50;
let club = 'Real Madrid';
const isFamous = false;
let famous;
famous = true;
function add(num1, num2) {
    // return num1 + num2;
}
add(3, 76);
add('Adam', 'Sand');
age = 150;
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Martin', 'Rock');
const numbers = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);
const friends = ['George', 'Jeff', 'Bill', 'Abdul'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);
console.log(club);
//object
const friend = {
    name: 'Samuel David',
    age: 61,
};
friend.age = 57;
const messi = {
    name: 'Messi',
    club: 'Barcelona',
    salary: 45000000,
    wife: 'Some name',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 51000000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPlayer = { salary: 10000 };
getBonus({ salary: 4500 });
getBonus(poorPlayer);
getBonus(messi);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
let player;
player = {
    club: 'Real Madrid',
    salary: 454000,
};
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
