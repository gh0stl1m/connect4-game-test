/**
 * Check the row of the board
 */
const checkRow = ({ cell1, cell2, cell3, cell4 }) => ((cell1 !== null) && (cell1 === cell2) && (cell1 === cell3) && (cell1 === cell4));

/**
 * Method to find a winner in the board row
 * @param {Array} boardGame - Matrix with the game
 * @return {Boolean} - The method returns true if a winner is found
 */
const checkWinnerRow = (boardGame) => {
  for (let column = 0; column < 7; column++) {
    for (let row = 0; row < 4; row++) {
      if (checkRow({
        cell1: boardGame[column][row],
        cell2: boardGame[column][row + 1],
        cell3: boardGame[column][row + 2],
        cell4: boardGame[column][row + 3],
      })) return true
    }
  }
}

/**
 * Method to find a winner in the board column
 * @param {Array} boardGame - Matrix with the game
 * @return {Boolean} - The method returns true if a winner is found
 */
const checkWinnerColumn = (boardGame) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      if (checkRow({
        cell1: boardGame[column][row],
        cell2: boardGame[column + 1][row],
        cell3: boardGame[column + 2][row],
        cell4: boardGame[column + 3][row],
      })) return true
    }
  }
}

/**
 * Method to find a winner in the board diag 1
 * @param {Array} boardGame - Matrix with the game
 * @return {Boolean} - The method returns true if a winner is found
 */
const checkWinnerDiag1 = (boardGame) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      if (checkRow({
        cell1: boardGame[column][row],
        cell2: boardGame[column + 1][row + 1],
        cell3: boardGame[column + 2][row + 2],
        cell4: boardGame[column + 3][row + 3],
      })) return true
    }
  }
}

/**
 * Method to find a winner in the board diag 2
 * @param {Array} boardGame - Matrix with the game
 * @return {Boolean} - The method returns true if a winner is found
 */
const checkWinnerDiag2 = (boardGame) => {
  for (let row = 0; row < 4; row++) {
    for (let column = 3; column < 6; column++) {
      if (checkRow({
        cell1: boardGame[column][row],
        cell2: boardGame[column - 1][row + 1],
        cell3: boardGame[column - 2][row + 2],
        cell4: boardGame[column - 3][row + 3],
      })) return true
    }
  }
}

/**
 * Method to find a winner in the board game
 * @param {Array} boardGame - Matrix with the game
 * @return {Boolean} - The method returns true if a winner is found
 */
const checkGameWinner = (boardGame) => {
  const rowWinner = checkWinnerRow(boardGame);
  const columnWinner = checkWinnerColumn(boardGame);
  const diag1Winner = checkWinnerDiag1(boardGame);
  const diag2Winner = checkWinnerDiag2(boardGame);

  if (rowWinner || columnWinner || diag1Winner || diag2Winner) return true;

  return false;
}

export default { checkGameWinner };
