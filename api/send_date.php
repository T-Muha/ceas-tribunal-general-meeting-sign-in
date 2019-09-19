<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");
$date = '';
$date = mysqli_real_escape_string($mysqli, $_POST["date"]);

$sql = "SHOW COLUMNS FROM `sign_in_attendance` LIKE '".$date."'";

$result = $mysqli->query($sql);
$exists = (mysqli_num_rows($result))?TRUE:FALSE;

if($exists) {
	echo $result ? "Success" : "Fail";
}
else {
	$sqlTwo = "ALTER TABLE sign_in_attendance ADD column `$date` VARCHAR( 128 )";
	$resultTwo = $mysqli->query($sqlTwo);
	echo mysqli_error($mysqli);
	echo $resultTwo ? "Success (Added Column)" : "Fail (Attempted to Add Column)";
}

mysqli_close($mysqli);
exit();
?>