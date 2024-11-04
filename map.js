// old way
const numbers = [2, 3, 20, 32, 9];

const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);



// ex.1 using map
const numbersArray = [23, 24, 25, 50, 100];

function doubleIt(number){
    return number * 2;
}
const result = numbersArray.map(doubleIt);
console.log(result);




// ex. 2 using map
const anArray = [2, 3, 4, 5, 22];
const makeItDouble = n => n*2;
const result2 = anArray.map(makeItDouble);
console.log(result2);




// ex. 3 using map - (too short, too much pressure)
const shortArray = [1, 22, 33, 80, 100];
const resultShortArray = shortArray.map(n => n * 2);
console.log(resultShortArray);