document.querySelector('#game input[name="send"]').addEventListener('click', async () => {
    const value = document.querySelector('#game input[name="guess"]').value;
    const response = await fetch('is_guess_correct.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({guess: value})
    });

    const result = await response.json();

    if(result.result == "wrong"){
        alert('WRONG');
    } else if(result.result == "correct"){
        const list = document.querySelector('#game > ul');
        while(list.firstElementChild){
            list.removeChild(list.firstElementChild);
        }

        result.word.forEach(char => {
            const el = document.createElement('li');
            el.textContent = char;
            list.appendChild(el);
        });
    }

});