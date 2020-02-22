<?php


$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT id,username,email,referrer,role,photo FROM users_tbl");
    while ($row = $stmt->fetch(pdo::FETCH_ASSOC)) {
        $users[]= $row;
    }
    echo json_encode($users);
} catch (PDOException $e) {
    echo $stmt . "<br>" . $e->getMessage();
}


?>