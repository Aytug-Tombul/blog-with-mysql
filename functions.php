<?php
function generetaNewString($len=10){

    $token = "qpalzmnxskwoeidjcnbvhfurgyt5876439021";
    $token = str_shuffle($token);
    $token = substr($token, 0, $len);

    return $token;
}


function redirectToIndex(){
    header('Location:index.html');
     exit();
}
?>