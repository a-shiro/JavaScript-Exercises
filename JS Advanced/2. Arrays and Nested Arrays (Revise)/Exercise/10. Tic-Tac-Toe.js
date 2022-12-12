/** @format */
function placeMove(move, board) {
    let [row, col] = move.split(' ');

    row = Number(row);
    col = Number(col)

    console.log(board)
    // check if place taken 
       // if taken print and continue with next move
       // else place and check for winner
         // if winner end game
         // else continue
}

function generateBoard() {
  const row = [false, false, false];
  const board = [];

  row.forEach(() => board.push(row));

  return board;
}

function play(playerMoves) {
  const board = generateBoard();

  playerMoves.map(move => placeMove(move, board))

}

play(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
