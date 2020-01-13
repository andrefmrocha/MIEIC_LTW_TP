const input = document.querySelector('#game input[name="guess"]')

document.querySelectorAll('#game ul li').forEach(element => element.addEventListener('click', () => {
    if(!element.classList.contains('used')){
        element.classList.add('used');
        input.value += element.textContent;
    }
}))