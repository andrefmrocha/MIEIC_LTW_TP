const input = document.querySelector('#register > input[type="password"]');
input.addEventListener('onfocusout', () => {
    const pattern = /[\w\_]/;
    if(!(pattern.test(input.value) && input.value.length >= 8)){
        input.style.borderColor = 'red';
    }
});