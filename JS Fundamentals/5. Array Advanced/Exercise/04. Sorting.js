function sorting(array) {
    array.sort((x, y) => x - y);

    let result = [];
    let counter = 0;

    while (array.length > 0) {
        result.push(array.pop());
        result.push(array.shift());

        counter++;
    }

    result = result.filter(Number);
    console.log(...result);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 7]);