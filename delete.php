<?php
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "blog_db";
    $deletingUser=$_POST['deleteID'];
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("DELETE FROM users_tbl WHERE id='$deletingUser'");
    echo "User Has Been Deleted";
?>