document.querySelectorAll('#products > ul > li').forEach(element => {
    const quantity = element.querySelector('span.qty');
    element.querySelector('a').addEventListener('click', () => {
        quantity.textContent = Number(quantity.textContent) + 1;
    });
});