<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");

$sql = "SELECT open from sign_in_info";
$result = $mysqli->query($sql);
$resultData = $result->fetch_assoc();
$isOpen = $resultData["open"];
echo $isOpen;

mysqli_close($mysqli);
exit();
?>