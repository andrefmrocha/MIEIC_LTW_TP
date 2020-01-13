document.querySelectorAll('#tic-tac-toe > div.square').forEach((square, index) => {
    square.addEventListener('click', () => updateBoard(index));
});
