async function correct(){
    alert('correct');
    
    const response = await fetch('save_score.php',{
        method: 'POST',
        body: JSON.stringify({
            username: document.querySelector('input[name="username"]').value,
            tries
        })
    });

    if(response.status == 200){
        alert('Success');
    } else {
        alert('Fail');
    }
}