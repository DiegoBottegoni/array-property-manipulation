const { customFilterUnique, getId } = require('../task1');
console.log('***** TESTING TASK 1 *****')

const objects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'David' }
];

const uniqueObjects = customFilterUnique(objects, getId);

console.log(uniqueObjects);