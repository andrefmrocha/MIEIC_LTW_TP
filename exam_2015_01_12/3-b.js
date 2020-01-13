document.querySelector('#send').addEventListener('click', async () => {
    const color = document.querySelector('div.box').style.backgroundColor;

    const response = await fetch('http://www.coloranalyzer.com/', {
        method: 'POST',
        body: JSON.stringify({color})
    });

    const result = await response.json();
    document.querySelector('div.box').style.backgroundColor = result.result;
});