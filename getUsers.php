<?php


$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT id,username,email,referrer FROM users_tbl");
    while ($row = $stmt->fetch(pdo::FETCH_ASSOC)) {
        $customers[]= $row;
    }
    echo json_encode($customers);
} catch (PDOException $e) {
    echo $stmt . "<br>" . $e->getMessage();
}


?>