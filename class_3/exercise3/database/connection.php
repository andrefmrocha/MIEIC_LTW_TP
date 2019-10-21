<?php
    function getConnection(){
        return new PDO('sqlite:news.db');
    }
?>