document.querySelector('#guess').addEventListener('click', () => {
    const guess = document.querySelector('input[name="guess"]').value;
    tries++;
    if(guess < secret){
        alert('go up')
    } else if(guess > secret){
        alert('go down')
    } else {
        correct();
    }
});