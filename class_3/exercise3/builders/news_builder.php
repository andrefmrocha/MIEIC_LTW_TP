<?php
function generateAsideNews($article)
{ ?>
    <article>
        <h1 class='title'>
            <a href=<?= getNewsItem($article['id']) ?>><?= $article['title'] ?></a>
        </h1>
        <p><?= $article['introduction'] ?>></p>
    </article>
<?php }
?>