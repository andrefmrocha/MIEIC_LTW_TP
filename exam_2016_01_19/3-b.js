document.querySelector('#register').addEventListener('submit', async (ev) => {
    const formData = new FormData();
    const username = document.querySelector('#register input[name="username"]');
    formData.append('username', username.value);
    const response = await fetch('verifyusername.php', {
        method: 'POST',
        body: formData
    });

    const validity = await response.json();

    if(!validity.valid){
        username.style.borderColor = 'red';
        ev.preventDefault();
    }

});