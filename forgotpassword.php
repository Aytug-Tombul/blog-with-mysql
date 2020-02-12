<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once "functions.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$servername = "localhost";
$DBusername = "root";
$DBpassword = "";
$DBname = "blog_db";
$email = $_POST["email"];
$pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$emailcheck = $pdo->query("SELECT `email` FROM `users_tbl` WHERE email='$email'");
if ($emailcheck->rowCount() > 0) {
    try {
        $token = generetaNewString();

        $sql = "UPDATE users_tbl SET token='$token',token_Expire=DATE_ADD(NOW(),INTERVAL 5 MINUTE) WHERE email ='$email'";
        $pdo->query($sql);

        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "exampleblogServ@gmail.com";
        $mail->Password = "blogservice";
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";
        $subject = "Reset Password";
        $body = "
            Hi ,<br><br>
            
            In order to reset password, please click on the link below<br>
            <a href='
            http://localhost/blogsite/resetPassword.php?email=$email&token=$token
            '>http://localhost/blogsite/resetPassword.php?email=$email&token=$token</a><br><br>

            Kind Regards,<br>
            Aytug T.
            ";

        $mail->isHTML(true);
        $mail->setFrom($email);
        $mail->addAddress($email);
        $mail->Subject = $subject;
        $mail->Body = $body;
        if ($mail->send()) {
            echo 'Email Found. Please Check your mailbox';
        } else {
            echo "  ".$mail->ErrorInfo;
        }
        
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
} else {
    echo 'Email not found. Please check your inputs.';
}
