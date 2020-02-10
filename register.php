<?php

use PHPMailer\PHPMailer\PHPMailer;


require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";



$image = $_FILES['image']['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$referrer = $_POST['referrer'];
$target = "images/" . basename($image);
try {
    $conn = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO users_tbl VALUES (NULL,'$username', '$password', '$email','$referrer','$image')";
    $conn->exec($sql);
    echo "New record created successfully";
    if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
        $msg = "Image uploaded successfully";
    } else {
        $msg = "Failed to upload image";
    }
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
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
$body = "Panda says : Thanks for registration I hope you can do this :)";



$mail->isHTML(true);
$mail->setFrom($email, $username);
$mail->addAddress($email);
$mail->Subject = $subject;
$mail->Body = $body;


if ($mail->send()) {
    echo "Email is Sent";
} else {
    echo $mail->ErrorInfo;
}
$conn = null;

?>