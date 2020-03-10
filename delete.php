<?php
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "blog_db";
    $deletingSelected=$_POST['deleteID'];
    $select=$_POST['mode'];
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if ($select==1) {
        $stmt = $pdo->query("DELETE FROM users_tbl WHERE id='$deletingSelected'");
        echo "User Has Been Deleted";
    }
    elseif ($select==2) {
        $stmt = $pdo->query("DELETE FROM blog WHERE id='$deletingSelected'");
        echo "Post Has Been Deleted";
    }
?>