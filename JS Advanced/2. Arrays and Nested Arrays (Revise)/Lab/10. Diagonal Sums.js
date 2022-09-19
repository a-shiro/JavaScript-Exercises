function solve(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    let matrixLen = matrix.length;

    for (let i = 0; i < matrixLen; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrixLen - 1 - i];
    }

    return `${primaryDiagonalSum} ${secondaryDiagonalSum}`;
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));
console.log(solve([
    [20, 40],
    [10, 60]
]));