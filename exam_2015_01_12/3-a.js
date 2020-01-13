document.querySelector('#copy').addEventListener('click', () => {
    document.querySelector('div.box').style.backgroundColor = document.querySelector('input[name="color"]').value;
});