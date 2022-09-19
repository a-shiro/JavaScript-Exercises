function solve(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row of matrix) {
        for (let n of row) {
            if (n > biggest) {
                biggest = n;
            }
        }
    }

    return biggest;
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]));