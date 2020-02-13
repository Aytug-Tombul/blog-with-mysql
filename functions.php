<?php


function generetaNewString($len=10){

    $token = "qpalzmnxskwoeidjcnbvhfurgyt5876439021";
    $token = str_shuffle($token);
    $token = substr($token, 0, $len);

    return $token;
}



function login($username,$password){
$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";
$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql="SELECT id FROM users_tbl WHERE username = '$username' AND password = '$password'";
$stmt = $pdo->query($sql);
if ($stmt->rowCount() > 0) {
    $res=1;
    echo $res;
}else{
    $res=0;
    echo $res;
}
}


function redirectToIndex(){
    header('Location:index.html');
     exit();
}
?>