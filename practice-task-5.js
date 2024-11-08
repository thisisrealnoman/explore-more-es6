// sum up ages with for loop and reduce
const people = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchorita", age: 22}
];


// for loop
let sum = 0;
for(const object of people){
    sum = object.age + sum;
    
}
console.log(sum);


// reduce
// p for previousValue
// c for currentValue
const summation = people.reduce((p, c) => p + c.age, 0)
console.log(summation);