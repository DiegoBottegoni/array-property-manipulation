function customFilterUnique(array, callback) {
    const seen = new Set();
    const uniqueElements = [];

    array.forEach(item => {
        const key = callback(item);
        if (!seen.has(key)) {
            seen.add(key);
            uniqueElements.push(item);
        }
    });

    return uniqueElements;
}

function getId(obj) {
    return obj.id;
}

module.exports = { customFilterUnique, getId };