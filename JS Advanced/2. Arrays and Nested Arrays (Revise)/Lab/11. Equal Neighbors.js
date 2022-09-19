function solve(matrix) {
    function createVisitedMatrix() {
        let result = [];

        for (let rows = 0; rows < matrix.length; rows++) {
            result.push([]);
            for (let cols = 0; cols < matrix[0].length; cols++) {
                result[rows].push(false);
            }
        }

        return result;
    }

    function inRange(row, col) {
        return row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length;
    }

    let visitedMatrix = createVisitedMatrix();
    let equals = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            visitedMatrix[row][col] = true;

            if (inRange(row - 1, col)) {
                if (visitedMatrix[row - 1][col] !== true && matrix[row][col] === matrix[row - 1][col]) {
                    equals++;
                }
            }
            if (inRange(row + 1, col)) {
                if (visitedMatrix[row + 1][col] !== true  && matrix[row][col] === matrix[row + 1][col]) {
                    equals++;
                }
            }

            if (inRange(row, col - 1)) {
                if (visitedMatrix[row][col - 1] !== true  && matrix[row][col] === matrix[row][col - 1]) {
                    equals++;
                }
            }

            if (inRange(row, col + 1)) {
                if (visitedMatrix[row][col + 1] !== true  && matrix[row][col] === matrix[row][col + 1]) {
                    equals++;
                }
            }
        }
    }

    return equals;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));
