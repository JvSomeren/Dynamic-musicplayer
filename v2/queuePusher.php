<?php
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
	
	$result = $conn->query("INSERT INTO bmqueue
													(PID, YTID, likes, dislikes, suggester, title)
													VALUES ()");

	$conn->close();
?>