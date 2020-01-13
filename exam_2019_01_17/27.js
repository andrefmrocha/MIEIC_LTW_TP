const positions = [...document.querySelectorAll('#tic-tac-toe > div.square')];


async function updateBoard(position){
    const board = document.querySelector('#tic-tac-toe');
    const response = await fetch('play.php', {
        method: 'POST',
        body: JSON.stringify({
            id: board.getAttribute('data-id'),
            position
        })
    });

    const state = await response.json();

    state.forEach((elem, index) => 
        positions[index].textContent = elem
    );
}

updateBoard();