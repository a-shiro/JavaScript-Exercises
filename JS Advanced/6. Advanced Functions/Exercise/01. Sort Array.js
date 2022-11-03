function sortArray(array, sortType) {
    switch (sortType) {
        case 'asc':
            array.sort((a, b) => a - b);
            break;
        case 'desc':
            array.sort((a, b) => b - a);
            break;
    }
    return array
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));