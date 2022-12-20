/** @format */

function checkDrawCondition(board) {
  for (let row of board) {
    for (let col of row) {
      if (col === false) {
        return 1;
      }
    }
  }

  return 3;
}

function checkBoardState(board, currentPlayer) {
  const winConditionsCheck = {
    firstRow: () =>
      board[0][0] !== false &&
      board[0][0] === board[0][1] &&
      board[0][0] === board[0][2],
    secondRow: () =>
      board[1][0] !== false &&
      board[1][0] === board[1][1] &&
      board[1][0] === board[1][2],
    thirdRow: () =>
      board[2][0] !== false &&
      board[2][0] === board[2][1] &&
      board[2][0] === board[2][2],
    firstCol: () =>
      board[0][0] !== false &&
      board[0][0] === board[1][0] &&
      board[0][0] === board[2][0],
    secondCol: () =>
      board[0][1] !== false &&
      board[0][1] === board[1][1] &&
      board[0][1] === board[2][1],
    thirdCol: () =>
      board[0][2] !== false &&
      board[0][2] === board[1][2] &&
      board[0][2] === board[2][2],
    mainDiagonal: () =>
      board[0][0] !== false &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2],
    secondaryDiagonal: () =>
      board[0][2] !== false &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0],
  };

  for (let key in winConditionsCheck) {
    if (winConditionsCheck[key]()) {
      winner = currentPlayer;
      return 2;
    }
  }

  return checkDrawCondition(board);
}

function getCurrentPlayer(moveCounter) {
  return moveCounter % 2 === 0 ? "O" : "X";
}

function placeMove(move, board, moveCounter) {
  let currentPlayer = getCurrentPlayer(moveCounter);
  let [row, col] = move.split(" ");

  row = Number(row);
  col = Number(col);

  if (board[row][col]) {
    console.log("This place is already taken. Please choose another!");
    return 0;
  }

  board[row][col] = currentPlayer;

  const result = checkBoardState(board, currentPlayer);

  return result;
}

function generateBoard() {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board.push([false, false, false]);
  }

  return board;
}

function play(playerMoves) {
  const board = generateBoard();
  let moveCounter = 1;

  for (move of playerMoves) {
    const result = placeMove(move, board, moveCounter);

    if (result === 0) {
      continue;
    } else if (result === 1) {
      moveCounter++;
    } else {
      if (result === 2) {
        console.log(`Player ${winner} wins!`);
      } else if (result === 3) {
        console.log("The game ended! Nobody wins :(");
      }
      board.forEach((row) => console.log(row.join("\t")));
      return;
    }
  }
}

let winner;

play(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
play(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
play(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
