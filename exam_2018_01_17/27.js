document.querySelector('#game input[name="reset"]').addEventListener('click', () => {
    document.querySelector('#game input[name="guess"]').value = "";
    document.querySelectorAll('#game ul li').forEach(element => element.classList.remove('used'));
});