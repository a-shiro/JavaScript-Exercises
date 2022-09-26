function solve(matrix) {
    function isMagic(matrix) {
        for (let i = 0; i < matrix.length - 1; i++) {
            let rowOneSum = matrix[i].reduce((total, n) => total + n);
            let rowTwoSum = matrix[i + 1].reduce((total, n) => total + n);

            let colOneSum = 0;
            let colTwoSum = 0;
            for (let j = 0; j < matrix.length; j++) {
                colOneSum += matrix[i][j];
                colTwoSum += matrix[i + 1][j];
            }

            if (rowOneSum !== rowTwoSum || colOneSum !== colTwoSum) {
                return false;
            }
        }
        return true;
    }

    let result = isMagic(matrix);

    console.log(result);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);