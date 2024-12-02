function makeArray (firstArray, secondArray, maxLength) {
    const combinedArray = [...firstArray, ...secondArray];
    return combinedArray.length > maxLength ? combinedArray.slice(0, maxLength) : combinedArray;
}