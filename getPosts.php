  
<?php
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "blog_db";

    try {
    $pdo = new PDO("mysql:host=$servername;dbname=$DBname", $DBusername,$DBpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->query("SELECT id,post,username,post_date FROM blog");
    while ($row = $stmt->fetch(pdo::FETCH_ASSOC)) {
        $posts[]= $row;
    }
    echo json_encode($posts);
} catch (PDOException $e) {
    echo $stmt . "<br>" . $e->getMessage();
}