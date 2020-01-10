document.querySelectorAll('#keypad > a').forEach(element => {
    element.addEventListener('click', () => {
        const ping = document.querySelector('#ping > input:nth-child(2)');
        ping.textContent = `${ping.textContent}${element.textContent}`;
    });
});