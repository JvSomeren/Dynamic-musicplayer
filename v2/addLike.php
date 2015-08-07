<?php
	header("Access-Control-Allow-Origin: *");

	include 'database.php';

	$playerID = $_REQUEST['pid'];
	$userID = $_REQUEST['userId'];

	if($playerID == NULL)
		$playerID = 12345;

	$songID = $_REQUEST['songId'];
	
	$result = $conn->query("SELECT like, dislike
													FROM EXISTS(
														SELECT 1
														FROM bmlikes
														WHERE userid = $userID 
															AND playerid = $playerID 
															AND songid = $songID)
													");

	/*
	$result = $conn->query("UPDATE bmqueue
													SET `likes` = likes + 1
													WHERE `id` = $id
													LIMIT 1");
	*/

	$conn->close();

	echo($result);
?>