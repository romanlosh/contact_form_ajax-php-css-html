<?php

$recepient = "jamesoncornil@gmail.com";
$sitename = "Sitename";

$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);

$pagetitle = "New application from the site \"$sitename\"";
$result = mail($recepient, $pagetitle, $message, "From: $recepient");

echo $result;

?>