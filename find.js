const players = [72, 55, 65, 75, 62, 54];

// if condition matched , it will return only first element of the condition
// const selected = players.find(player => player > 70);

// if condition does not fulfilled , it will return undefined not an empty array like "filter"
const selected = players.find(player => player > 80);
console.log(selected);


/**
 * 1. map (do loop to every array element, do the task and return an array)
 * 2. forEach (do loop to every array element, do the task BUT do not return an array)
 * 3. filter (goes to every array element, check condition, and return the result, if do not find anything, then return an empty array)
 * 4. find (goes to every array element, check condition, if condition matched and there are 
 *           multiple result, will return the first result, if one then will return one result and
 *           if do not got anything will return undefined)
 * 5. reduce 
 */

// goes to every array element === do loop to every array element