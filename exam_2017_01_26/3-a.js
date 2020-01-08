const largePic = document.querySelector('#photos img.large');
document.querySelectorAll('#photos ul li img').forEach(element => {
    element.addEventListener('click', () => {
        largePic.src = `large/${element.src}`
    });
});