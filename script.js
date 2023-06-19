let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
  if (board[index] === '') {
    

    board[index] = currentPlayer;
    const cell = document.getElementsByClassName('cell')[index];
    cell.innerText = currentPlayer;
    cell.classList.add('fade-in');
    if (checkWin(currentPlayer)) {
      setTimeout(() => {
        alert('Player ' + currentPlayer + ' wins!');
        resetGame();
      }, 100);
    } else if (checkDraw()) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 100);
    } 
    else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  else {

    board[index] = '';
    const cell = document.getElementsByClassName('cell')[index];
    cell.innerText = '';
    cell.classList.add('fade-in');
  }

}

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] === player && board[b] === player && board[c] === player;
  });
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].classList.remove('fade-in');
  }
}
