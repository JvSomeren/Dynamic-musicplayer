<?php
	header("Content-Type: application/json; charset=UTF-8");

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

	$playerID = $_GET['pid'];

	if($playerID == NULL)
		$playerID = 12345;

	$result = $conn->query("SELECT PID, YTID, likes, dislikes, suggester, title
													FROM bmqueue
													WHERE PID = $playerID
													ORDER BY likes DESC");

	$outp = "";
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"PID":"' . $rs["PID"] . '",';
			$outp .= '"YTID":"' . $rs["YTID"] . '",';
			$outp .= '"likes":"' . $rs["likes"] . '",';
			$outp .= '"dislikes":"' . $rs["dislikes"] . '",';
			$outp .= '"suggester":"' . $rs["suggester"] . '",';
			$outp .= '"title":"' . $rs["title"] . '"}';
	}
	$outp ='{"records":['.$outp.']}';
	$conn->close();

	echo($outp);
?>