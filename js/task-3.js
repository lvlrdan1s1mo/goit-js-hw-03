function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (let number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}