function customFilterUnique(array, callback) {
    const nameCount = new Map();
    const uniqueNames = [];
    array.forEach(item => {
        const name = callback(item);
        nameCount.set(name, (nameCount.get(name) || 0) + 1);
    });

    array.forEach(item => {
        const name = callback(item);
        if (nameCount.get(name) === 1) {
            uniqueNames.push(item.name);
        }
    });

    return uniqueNames;
}

module.exports = { customFilterUnique, getId };
