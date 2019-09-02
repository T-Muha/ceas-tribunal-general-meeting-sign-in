<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");
$mNum = '';
$date = '';
$date = mysqli_real_escape_string($mysqli, $_POST["date"]);
$mNum = mysqli_real_escape_string($mysqli, $_POST["mNum"]);

$sql = "INSERT INTO attendance (`$date`) VALUES ('".$mNum."')";

$result = $mysqli->query($sql);
//echo mysqli_error($mysqli);
echo $result ? "Success" : "Fail";

mysqli_close($mysqli);
exit();
?>