<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Super Legit News</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="style.css" rel="stylesheet">
  <link href="layout.css" rel="stylesheet">
  <link href="responsive.css" rel="stylesheet">
  <link href="comments.css" rel="stylesheet">
  <link href="forms.css" rel="stylesheet">
</head>

<body>
  <header id="website-header">
    <h1 class="title"><a href="index.html">Super Legit News</a></h1>
    <h2 class="title"><a href="index.html">Where fake news are born!</a></h2>
    <div id="signup" class="title">
      <a id="register-ref" href="register.html">Register</a>
      <a href="login.html">Login</a>
    </div>
  </header>
  <nav id="menu">
    <!-- just for the hamburguer menu in responsive layout -->
    <input type="checkbox" id="hamburger">
    <label class="hamburger" for="hamburger"></label>

    <ul class="navbar">
      <li><a href="index.html">Local</a></li>
      <li><a href="index.html">World</a></li>
      <li><a href="index.html">Politics</a></li>
      <li><a href="index.html">Sports</a></li>
      <li><a href="index.html">Science</a></li>
      <li><a href="index.html">Weather</a></li>
    </ul>
  </nav>
  <?php
  include_once('builders/news_builder.php');
  include_once('builders/article_builder.php');
  include_once('database/connection.php');
  include_once('database/news.php');
  $db = getConnection();
  $articles = getArticles($db);
  ?>
  <aside id='related'>
    <?php foreach ($articles as $article) {
      generateAsideNews($article);
    } ?>
  </aside>
  <section id='news'>
    <?php foreach ($articles as $article) {
      generateArticle($article);
    } ?>
  </section>
  <footer>
    <p>&copy; Fake News, 2017</p>
  </footer>
</body>

</html>