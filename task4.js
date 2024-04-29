function getArrayIntersection(array1, array2) {
    const set1 = new Set(array1);
    const intersection = array2.filter(item => set1.has(item));
    return intersection;
}

function getArrayUnion(array1, array2) {
    const combinedSet = new Set([...array1, ...array2]);
    return Array.from(combinedSet);
}

module.exports = { getArrayIntersection, getArrayUnion }