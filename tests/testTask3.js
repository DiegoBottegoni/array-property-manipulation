const { customShuffle } = require('../task3');
console.log('***** TESTING TASK 3 *****')

const originalArray = ["a", "b", "c", "d", "e"];
const shuffledArray = customShuffle(originalArray);

console.log("Original:", originalArray);
console.log("Shuffled:", shuffledArray);

const originalArray2 = [1, 2, 3, 4, 5];
const shuffledArray2 = customShuffle(originalArray2);

console.log("Original:", originalArray2);
console.log("Shuffled:", shuffledArray2);