<?php
    function getArticles($db){
        $stmt = $db->prepare('
            SELECT news.*, users.*, COUNT(comments.id) AS comments
            FROM news JOIN
                users USING (username) LEFT JOIN
                comments ON comments.news_id = news.id
            GROUP BY news.id, users.username
            ORDER BY published DESC
        ');
        $stmt->execute();
        return $stmt->fetchAll();
    }

    function getArticle($db){
        $stmt = $db->prepare('SELECT * FROM news JOIN users USING (username) WHERE id = ?');
        $stmt->execute(array($_GET['id']));
        return $stmt->fetch();
    }

    function getComments($db){
        $stmt = $db->prepare('SELECT * FROM comments JOIN users USING (username) WHERE news_id = ?');
        $stmt->execute(array($_GET['id']));
        return $stmt->fetchAll();
    }

?>
