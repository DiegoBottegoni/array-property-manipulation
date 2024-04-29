const { measureArrayPerformance, customMap, customFilter, customReduce } = require('../task5');
console.log('***** TESTING TASK 5 *****')

const largeArray = Array.from({ length: 1000000 }, (_, index) => index);

const builtInMapTime = measureArrayPerformance(largeArray.map.bind(largeArray, x => x * 2), largeArray);
const customMapTime = measureArrayPerformance(customMap.bind(null, largeArray, x => x * 2), largeArray);

const builtInFilterTime = measureArrayPerformance(largeArray.filter.bind(largeArray, x => x % 2 === 0), largeArray);
const customFilterTime = measureArrayPerformance(customFilter.bind(null, largeArray, x => x % 2 === 0), largeArray);

const builtInReduceTime = measureArrayPerformance(largeArray.reduce.bind(largeArray, (acc, x) => acc + x, 0), largeArray);
const customReduceTime = measureArrayPerformance(customReduce.bind(null, largeArray, (acc, x) => acc + x, 0), largeArray);

console.log(`Built-in Map Time: ${builtInMapTime} ms, Custom Map Time: ${customMapTime} ms`);
console.log(`Built-in Filter Time: ${builtInFilterTime} ms, Custom Filter Time: ${customFilterTime} ms`);
console.log(`Built-in Reduce Time: ${builtInReduceTime} ms, Custom Reduce Time: ${customReduceTime} ms`);