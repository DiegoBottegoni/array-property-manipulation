const { getArrayIntersection, getArrayUnion } = require('../task4');
console.log('***** TESTING TASK 4 *****')

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = getArrayIntersection(array1, array2);
console.log('Intersection:', intersection);

const union = getArrayUnion(array1, array2);
console.log('Union:', union);