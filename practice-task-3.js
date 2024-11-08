/* [q:2] you are given an array say [33, 50, 79, 78, 90, 101, 30].
Now return/get all the elements which are divisible by 10 array.filter() method.
[q:3] Now do the same task using array.find() method.  Then compare the output of question 2 and 3; */

const myArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = number => number % 10 == 0;
const  result = myArray.filter(divisibleBy10); // q2
const  result2 = myArray.find(divisibleBy10); // q3

console.log(result); // ans2
console.log(result2); // ans3