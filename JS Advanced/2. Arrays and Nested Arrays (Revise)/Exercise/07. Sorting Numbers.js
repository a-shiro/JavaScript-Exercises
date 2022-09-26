function solve(array) {
    array.sort((x, y) => y - x);

    let result = [];
    let counter = 0;

    while (array.length > 0) {
        result.push(array.pop());
        result.push(array.shift());

        counter++;
    }

    return result;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))