function solve(array) {
    let biggestN = Number.MIN_SAFE_INTEGER;
    let result = [];

    array.forEach(n => {
        if (n >= biggestN) {
            result.push(n);
            biggestN = n;
        }
    })

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([20, 3, 2, 15, 6, 1]));