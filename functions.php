<?php


function generetaNewString($len = 10)
{

    $token = "qpalzmnxskwoeidjcnbvhfurgyt5876439021";
    $token = str_shuffle($token);
    $token = substr($token, 0, $len);

    return $token;
}



function login($tablename, $username, $password)
{
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "blog_db";
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT id FROM $tablename WHERE username = '$username' AND password = '$password'";
    $stmt = $pdo->query($sql);
    if ($stmt->rowCount() > 0) {
        $res = array(
            "result" => "success",
            "username" => $username
        );
        echo json_encode($res);
    } else {
        $res = array(
            "result" => "failed",
            "username" => $username
        );
        echo json_encode($res);
    }
}


function redirectToIndex()
{
    header('Location:index.html');
    exit();
}


function postToDatabase($post ,$username ,$tablename){
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "blog_db";
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername, $DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT id FROM $tablename WHERE username = '$username'";
    $stmt = $pdo->query($sql);
    if ($stmt->rowCount() > 0) {
        try{
            $sql2 = "INSERT INTO blog VALUES (NULL,'$post','$username',NOW())";
            $pdo->query($sql2);
            $sql3 = "SELECT id FROM blog WHERE post = '$post'";
            $stmt3=$pdo->query($sql3);
            while($row = $stmt3->fetch(PDO::FETCH_ASSOC)) {
    
                $postId[] = $row;
                
                  
            }
            echo json_encode($postId); 
            
        }catch (PDOException $e) {
            echo $sql2 . "<br>" . $e->getMessage();
        }
       

    }
}