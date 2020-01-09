document.querySelector('#products > a.buy').addEventListener('click', async () => {
    const response = await fetch('calculatetotal.php', {
        method: 'POST',
        body: JSON.stringify({
            products: [...document.querySelectorAll('#products > ul > li')].map(element => {
                const name = element.innerText.substring(0, element.innerText.indexOf(':') - 1);
                const qty = Number(element.querySelector('.qty').innerText);
                return {
                    name,
                    qty
                }
            })
        })
    });

    const qty = Number(await response.text());
    const text = qty < 0 ? 'not enough stock' : qty;
    document.querySelector('#products > p.total').innerText = text;
});
