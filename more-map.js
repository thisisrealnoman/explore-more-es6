// cases: map

const numbers = [10, 23, 44, 20, 12];


const doubleIt = numbers.map(num => num * 2);
// console.log(doubleIt);

const addFive = numbers.map(n => n + 5);
// console.log(addFive);

const halves = numbers.map(num => num/2);
// console.log(halves);


const friends = ["lex", "rolex", "watchy", "mickelz"];

const arrayLenght = friends.map(frnd => frnd.length);
// console.log(arrayLenght);

const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);
