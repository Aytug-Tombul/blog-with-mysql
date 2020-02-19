<?php
require_once "functions.php";
$username=$_POST["username"];
$password=$_POST["password"];
$tablename = "users_tbl";
login($tablename,$username , $password);
?>