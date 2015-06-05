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

	$sql = "CREATE TABLE bmQueue (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
		PID VARCHAR(5) NOT NULL,
		YTID VARCHAR(15) NOT NULL,
		likes INT NOT NULL,
		dislikes INT NOT NULL,
		suggester VARCHAR(30),
		title VARCHAR(30)
	)";

	if ($conn->query($sql) === TRUE) {
			echo "Table MyGuests created successfully";
	} else {
			echo "Error creating table: " . $conn->error;
	}

	$conn->close();
?>