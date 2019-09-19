<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");
$firstName = '';
$lastName = '';
$email = '';
$id = '';
$firstName = mysqli_real_escape_string($mysqli, $_POST["firstName"]);
$lastName = mysqli_real_escape_string($mysqli, $_POST["lastName"]);
$email = mysqli_real_escape_string($mysqli, $_POST["email"]);
$id = mysqli_real_escape_string($mysqli, $_POST["id"]);

$sql = 'INSERT INTO sign_in_members (FirstName, LastName, Email, ID)' . "VALUES ('".$firstName."','".$lastName."','".$email."','".$id."')";
$result = $mysqli->query($sql);

echo $result ? "Success" : "Fail";

mysqli_close($mysqli);
exit();
?>