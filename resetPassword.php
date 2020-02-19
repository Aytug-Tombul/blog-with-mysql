<?php

require_once "functions.php";




$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";
$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if(isset($_GET['email'])&& isset($_GET['token'])){
    $email= $_GET['email'];
    $token= $_GET['token'];
    $stmt=$pdo->query("SELECT id FROM users_tbl WHERE 
    email = '$email' AND token='$token' AND token<>'' AND token_Expire > NOW()
    ");
    

    if ($stmt->rowCount() > 0) {
        $newPassword = generetaNewString();
        $pdo->query("UPDATE users_tbl SET token='', password = '$newPassword'
        WHERE email = '$email'
        ");
        echo"Your New Password Is $newPassword<br><a href='index.html'>Click Here To Login</a>";
    }else{
        redirectToIndex();
    }
 }else {
     redirectToIndex();
 }





?>
