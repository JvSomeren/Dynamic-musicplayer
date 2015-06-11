<?php
	header("Access-Control-Allow-Origin: *");

	include 'database.php';

	$id = $_REQUEST['id'];

	$result = $conn->query("UPDATE bmqueue
													SET `likes` = likes + 1
													WHERE `id` = $id
													LIMIT 1");

	$conn->close();
?>