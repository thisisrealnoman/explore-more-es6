// your task is to display instructor names that has the position senior using filter

const instructor = [
    {name: "Nodi", age: 28, position: "senior"},
    {name: "Akil", age: 26, position: "junior"},
    {name: "Sobuj", age: 30, position: "senior"},
]

// console.log(instructor);
const result = instructor.filter(obj => obj.position == "senior");
const resultName = result.map(object => object.name);
console.log(resultName);