function chunkArray(array, chunkSize) {
    try {
        if (chunkSize <= 0) {
            throw new Error("chunkSize must be greater than 0");
        }

        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    } catch (error) {
        console.error("Error: " + error.message);
        return [];
    }
}

module.exports = { chunkArray };