<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");
$date = '';
$date = mysqli_real_escape_string($mysqli, $_POST["date"]);
$email = '';
$email = mysqli_real_escape_string($mysqli, $_POST["email"]);
$sql = 'INSERT IGNORE INTO sign_in_attendance (Date, Email)' . "VALUES ('".$date."','".$email."')";

$result = $mysqli->query($sql);
echo $result ? "Success" : "Fail";

mysqli_close($mysqli);
exit();
?>