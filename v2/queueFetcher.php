<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	include 'database.php';

	$playerID = $_GET['pid'];

	if($playerID == NULL)
		$playerID = 12345;

	$result = $conn->query("SELECT id, PID, YTID, likes, dislikes, suggester, title
													FROM bmqueue
													WHERE PID = $playerID
													ORDER BY likes-dislikes DESC");

	$outp = "";
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"id":"' . $rs["id"] . '",';
			$outp .= '"PID":"' . $rs["PID"] . '",';
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