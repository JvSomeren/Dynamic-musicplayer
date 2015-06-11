<?php
	header("Access-Control-Allow-Origin: *");

	include 'database.php';

	if(isset($_SESSION['PID']) && !empty($_SESSION['PID'])) {
		$PID = $_SESSION['PID'];
	}
	else {
		$PID = 12345;
	}

	$YTID = $_REQUEST['YTID'];
	$suggester = "Placeholder";
	$title = $_REQUEST['title'];
	
	if(!empty($PID) && !empty($YTID) && !empty($suggester) && !empty($title)) {
		$result = $conn->query("INSERT INTO bmqueue
														(PID, YTID, suggester, title)
														VALUES
														('$PID', '$YTID', '$suggester', '$title')");
	}

	$conn->close();
?>