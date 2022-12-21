/** @format */

function solve(array) {
    function compareDiagonals(matrix) {
        let mainDiagonal = 0;
        let secondaryDiagonal = 0;
      
        for (let i = 0; i < matrix.length; i++) {
          mainDiagonal += matrix[i][i];
          secondaryDiagonal += matrix[matrix.length - 1 - i][i];
        }
      
        return [mainDiagonal === secondaryDiagonal, mainDiagonal];
      }
      
      function createMatrix(array) {
        const result = [];
      
        array.forEach((element) => {
          result.push(element.split(" ").map((n) => Number(n)));
        });
      
        return result;
      }

  const matrix = createMatrix(array);

  const [areEqual, diagonalSum] = compareDiagonals(matrix);

  if (areEqual) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
      const row = "null ".repeat(matrix.length).trimEnd().split(" ");
      result.push(row);
    }

    for (let i = 0; i < matrix.length; i++) {
      result[i][i] = matrix[i][i];
      result[matrix.length - 1 - i][i] = matrix[matrix.length - 1 - i][i];
    }

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
        if (result[i][j] === "null") {
          result[i][j] = diagonalSum;
        }
      }
    }

    result.forEach(row => console.log(...row));

  } else {
    matrix.forEach((row) => console.log(...row));
  }
}

solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);

// solve(["1 1 1", "1 1 1", "1 1 0"]);
