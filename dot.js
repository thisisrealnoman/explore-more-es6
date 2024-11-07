const person = {
    name: "kodom ali",
    job: "badam khai",
    3: "third",
    "weird-nickname": "kismot ali"
}

// way: 1
console.log(person.job);

//way: 2
console.log(person["job"]);

// way: 3
const job = "job";
console.log(person[job]);
 
// 3
console.log(person["3"]);

// weird name
console.log(person["weird-nickname"]);