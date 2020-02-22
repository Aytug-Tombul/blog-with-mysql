<?php

use PHPMailer\PHPMailer\PHPMailer;


require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";


$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$image = $_FILES['image']['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$referrer = $_POST['referrer'];
$date = date('Y-m-d H:i:s');
$target = "images/" . basename($image);

$usernamecheck = $pdo->query("SELECT `username` FROM `users_tbl` WHERE username='$username' OR email='$email'");
while ($row = $usernamecheck->fetch(pdo::FETCH_ASSOC)) {
    $taken[] = $row;
}

if (isset($taken) ) {
    echo $username . " or " . $email . " is already taken";
} else {
    try {

        $sql = "INSERT INTO `users_tbl` (`id`, `username`, `password`, `email`, `referrer`, `photo`, `token`, `token_Expire`) VALUES (NULL,'$username', '$password', '$email','$referrer','$image',NULL,NOW())";
        $pdo->exec($sql);
        echo "New record created successfully";
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
            $msg = "Image uploaded successfully";
        } else {
            $msg = "Failed to upload image";
        }
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "exampleblogServ@gmail.com";
        $mail->Password = "blogservice";
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";
        $subject = "Thanks For Registration";
        $body = "Thanks for registration I hope you can do this :)";



        $mail->isHTML(true);
        $mail->setFrom($email, $username);
        $mail->addAddress($email);
        $mail->Subject = $subject;
        $mail->Body = $body;


        if ($mail->send()) {
            echo "   Email is Sent";
        } else {
            echo "  " . $mail->ErrorInfo;
        }
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}
$conn = null;
