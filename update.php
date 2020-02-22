<?php
$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";
$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$updateID=$_POST['updateID'];
$image = $_FILES['image']['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$referrer = $_POST['referrer'];
$target = "images/" . basename($image);

$idCheck = $pdo->query("SELECT `id` FROM `users_tbl` WHERE id='$updateID'");
while ($row = $idCheck->fetch(pdo::FETCH_ASSOC)) {
    $userID[] = $row;
}
$usernamecheck = $pdo->query("SELECT `username` FROM `users_tbl` WHERE username='$username' OR email='$email'");
while ($row = $usernamecheck->fetch(pdo::FETCH_ASSOC)) {
    $taken[] = $row;
}
if (!isset($userID) OR isset($taken) ) {
    echo $username . " or " . $email . " is already taken";
} else {
    try {

        $sql = "UPDATE users_tbl SET username='$username',password='$password',email='$email',referrer='$referrer',photo='$image' WHERE id='$updateID'";
        $pdo->exec($sql);
        echo "Update Success";
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
            $msg = "Image uploaded successfully";
        } else {
            $msg = "Failed to upload image";
        }
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
?>