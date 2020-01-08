const pics = document.querySelectorAll('#photos ul li img');
const picsContainer = document.querySelector('#photos ul');
document.querySelector('#photos > a').addEventListener('click',async () => {
    const response = await fetch('getrandomimages.php', {
        method: 'GET'
    });


    const newPics = await response.json();

    newPics.forEach(pic => {
        if(!pics.find(element => element.src == pic)){
            const li = document.createElement('li');
            const img = document.createElement('img');
            li.appendChild(img);
            img.src=pic;
            picsContainer.appendChild(li);
        }
    });
});