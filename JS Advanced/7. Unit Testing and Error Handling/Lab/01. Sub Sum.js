function solve(array, startIdx, endIdx) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx >= array.length) {
        endIdx = array.length - 1;
    }

    let sum = 0;

    for (let i = startIdx; i <= endIdx; i++) {
        sum += Number(array[i]);
    }

    return sum;
}

let result;

result = solve([10, 20, 30, 40, 50, 60], 3, 300);
console.log(result);

result = solve([10, 'twenty', 30, 40], 0, 2);
console.log(result);

result = solve([], 1, 2);
console.log(result);

result = solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
console.log(result);