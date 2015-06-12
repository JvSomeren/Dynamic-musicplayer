<?php
	header("Access-Control-Allow-Origin: *");

	include 'database.php';

	if(isset($_SESSION['PID']) && !empty($_SESSION['PID'])) {
		$PID = $_SESSION['PID'];
	}
	else {
		$PID = 12345;
	}

	$id = $_REQUEST['id'];

	$result = $conn->query("DELETE FROM bmqueue
													WHERE `id` = $id");
	
	$conn->close();
?>