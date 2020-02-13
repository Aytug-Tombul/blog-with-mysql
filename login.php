<?php
require_once "functions.php";
$username=$_POST["username"];
$password=$_POST["password"];
login($username , $password);
?>