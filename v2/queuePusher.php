<?php
	header("Access-Control-Allow-Origin: *");

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ssr";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
	}

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