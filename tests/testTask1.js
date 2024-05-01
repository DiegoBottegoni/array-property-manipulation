const { customFilterUnique } = require('../task1');
console.log('***** TESTING TASK 1 *****');

const people = [
    { name: 'Tomas' },
    { name: 'Tomas' },
    { name: 'Ilya' },
    { name: 'Alexandrina' }
];

const people2 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'David' }
];

const uniqueNames = customFilterUnique(people, item => item.name);
console.log(uniqueNames);

const uniqueNames2 = customFilterUnique(people2, item => item.name);
console.log(uniqueNames2);
