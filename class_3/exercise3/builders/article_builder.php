<?php
function getNewsItem($id)
{
  return "news_item.php?id=$id";
}
function generateArticle($article)
{ ?>


  <article>
    <header>
      <h1>
        <a href=<?= getNewsItem($article['id']) ?>><?= $article['title'] ?></a>
      </h1>
    </header>
    <img src="http://lorempixel.com/600/300/business/" alt="">
    <p><?= $article['fulltext'] ?></p>
    <footer>
      <span class='author'><?= $article['name'] ?></span>
      <span class='tags'><?= $article['tags'] ?></span>
      <a class='comments' href=<?= getNewsItem($article['id']) ?>><?= $article['comments'] ?></a>
    </footer>
  </article>
<?php }
?>