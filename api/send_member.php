<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");
$firstName = '';
$lastName = '';
$mNumber = '';
$email = '';
$id = '';
$firstName = mysqli_real_escape_string($mysqli, $_POST["firstName"]);
$lastName = mysqli_real_escape_string($mysqli, $_POST["lastName"]);
$mNumber = mysqli_real_escape_string($mysqli, $_POST["mNumber"]);
$email = mysqli_real_escape_string($mysqli, $_POST["email"]);
$id = mysqli_real_escape_string($mysqli, crypt($_POST["id"], 'QxLUF1MfV1'));

$sql = 'INSERT INTO members (FirstName, LastName, MNumber, Email, ID)' . "VALUES ('".$firstName."','".$lastName."','".$mNumber."','".$email."','".$id."')";
$result = $mysqli->query($sql);

echo $result ? "Success" : "Fail";

mysqli_close($mysqli);
exit();
?>