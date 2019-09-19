<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");

//may be called twice if the user uses card and is not found in the member table

$ID = mysqli_real_escape_string($mysqli, $_POST["ID"]);
$email = mysqli_real_escape_string($mysqli, $_POST["email"]);

if ($email == 'unknown') { //user uses card to sign in, but not the form. Can result in a second use of this file

	$sql = "SELECT FirstName, LastName, Email, ID FROM sign_in_members WHERE ID = '".$ID."'";
	$result = $mysqli->query($sql);
	$foundMember = new stdClass();
	if ($result->num_rows > 0) {
		$resultData = $result->fetch_assoc();	
		$foundMember->exists = true;
		$foundMember->FirstName = $resultData["FirstName"];
		$foundMember->LastName = $resultData["LastName"];
		$foundMember->Email = $resultData["Email"];
		$foundMember->ID = $resultData["ID"];
		echo json_encode($foundMember);
	}
	else {
		$foundMember->exists = false;
		echo json_encode($foundMember);
	}

}
else { //any case where user signs in manually. Never results in second use of this file
	$sql = "SELECT FirstName, LastName, Email, ID FROM sign_in_members WHERE Email = '".$email."'";
	$result = $mysqli->query($sql);
	$foundMember = new stdClass();
	if ($result->num_rows > 0) {
		$resultData = $result->fetch_assoc();

		//always updates an unknown id
		if ($resultData["ID"] == "unknown") {
			$sqlTwo = "UPDATE sign_in_members SET ID = '".$ID."' WHERE Email = '".$email."'";
			$resultTwo = $mysqli->query($sqlTwo);
		}
	
		$foundMember->exists = true;
		$foundMember->FirstName = $resultData["FirstName"];
		$foundMember->LastName = $resultData["LastName"];
		$foundMember->Email = $resultData["Email"];
		$foundMember->ID = $resultData["ID"];
		echo json_encode($foundMember);
	}
	else {
		$foundMember->exists = false;
		echo json_encode($foundMember);
	}

}

mysqli_close($mysqli);
exit();
?>