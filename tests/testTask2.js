const { chunkArray } = require('../task2');
console.log('***** TESTING TASK 2 *****')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const result = chunkArray(array, chunkSize);
console.log(result);

const array2 = [1, 2, 3, 4, 5];
const chunkSize2 = 0;
const result2 = chunkArray(array2, chunkSize2);
console.log(result2);

const array3 = [1, 2, 3, 4, 5];
const chunkSize3 = 2;
const result3 = chunkArray(array3, chunkSize3);
console.log(result3);