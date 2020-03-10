<?php
$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";
$postID=$_POST['updateID'];
$newPost=$_POST['post'];
$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {

    $sql = "UPDATE blog SET post= '$newPost'  WHERE id = '$postID' ";
    $pdo->exec($sql);
    echo "Update Success";
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}