// explore more es6

/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values (not from es6)
 * 7. Object.entries
 * 8. for of (used in array and string)
 * 9. for in (used in object)
 */



// template string
const a = 50;
const numbers = [20, 39, 36];
const people = {
    name: "Ali"
}
const message = `Hi, ${people.name} has a : ${a} access to ${numbers[2]}`;
console.log(message);


// arrow function
const square = x => x * x;


// destructuring and spread operator

//ex. 1 - object destructuring
const {name, age, ...others} = {x: 2, y: 10, z:50, age:32, name: "Masud Rana", money: 123445};

//ex. 2 - array destructuring
const [first, second, ...rest] = ["Prothom", "Ditio", "tritio", "chothurto"];
console.log(rest);



