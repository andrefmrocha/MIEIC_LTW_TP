document.querySelector('#pin').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    document.querySelectorAll('#pin input[type="text"]').forEach(input => 
        formData.append(input.name, input.value)
    );

    const response = await fetch('verify_pin.php', {
        method: 'POST',
        body: formData
    });


    const valid = await response.json();

    if(!valid.valid){
        document.querySelector('#pin input[name="pin"]').style.borderColor = 'red';
    }
});