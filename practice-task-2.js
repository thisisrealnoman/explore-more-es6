/* you have an odd array (array with odd numbers). [1, 3, 5, 7, 9]. 
Now convert this array into an even array(array with even numbers). [2, 4, 6, 8, 10].
do this using for loop and array.map() method. Hints: add one to any odd number and it will become an
even number.*/

const odd = [1, 3, 5, 7, 9];
const resultEvenNumbers = [];
for(const num of odd){
    const makeEven = num + 1;
    resultEvenNumbers.push(makeEven);
}
console.log(resultEvenNumbers);
const evenIt = n => n + 1;
const resultEven = odd.map(evenIt);
console.log(resultEven);
