<?php
error_reporting(-1);
set_include_path("C:/MAMP/htdocs/api/includes/");
require_once("mysqli.php");

//may be called twice if the user uses card and is not found in the member table

$ID = mysqli_real_escape_string($mysqli, crypt($_POST["ID"], 'QxLUF1MfV1'));
$MNum = mysqli_real_escape_string($mysqli, $_POST["MNum"]);

if ($MNum == 'unknown') { //user uses card to sign in, but not the form. Can result in a second use of this file

	$sql = "SELECT FirstName, LastName, MNumber, Email, ID FROM members WHERE ID = '".$ID."'";
	$result = $mysqli->query($sql);
	$foundMember = new stdClass();
	if ($result->num_rows > 0) {
		$resultData = $result->fetch_assoc();	
		$foundMember->exists = true;
		$foundMember->FirstName = $resultData["FirstName"];
		$foundMember->LastName = $resultData["LastName"];
		$foundMember->MNumber = $resultData["MNumber"];
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
	$sql = "SELECT FirstName, LastName, MNumber, Email, ID FROM members WHERE MNumber = '".$MNum."'";
	$result = $mysqli->query($sql);
	$foundMember = new stdClass();
	if ($result->num_rows > 0) {
		$resultData = $result->fetch_assoc();

		//always updates an unknown id
		if ($resultData["ID"] == "unknown") {
			$sqlTwo = "UPDATE members SET ID = '".$ID."' WHERE MNumber = '".$MNum."'";
			$resultTwo = $mysqli->query($sqlTwo);
		}
	
		$foundMember->exists = true;
		$foundMember->FirstName = $resultData["FirstName"];
		$foundMember->LastName = $resultData["LastName"];
		$foundMember->MNumber = $resultData["MNumber"];
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