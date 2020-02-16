<?php
require_once "functions.php";

$post = $_POST['post'];
$username = $_POST['username'];
$tablename="users_tbl";

postToDatabase($post,$username,$tablename);

?>