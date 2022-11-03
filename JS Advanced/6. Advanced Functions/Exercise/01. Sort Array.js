function sortArray(array, sortType) {
    array.sort((a, b) => sortType === 'asc' ? a - b : b - a);

    return array;
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');