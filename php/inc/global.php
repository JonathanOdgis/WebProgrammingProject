<?php
ini_set('display_errors', 1);
date_default_timezone_set("America/New_York");

function GetConnection(){
	include 'password.php';
	return new mysqli('localhost','jonathan',$sql_password,'c9');
}

function my_print($x){
	echo '<pre>';
	print_r($x);
	echo '</pre>';
}


function FetchAll($sql){
		$ret = array();
		$conn = GetConnection();
		$results = $conn->query($sql);
		
		$error = $conn->error;
		if($error){
			echo $error;
		}else{
			while ($rs = $results->fetch_assoc()) {
				$ret[] = $rs;
			}			
		}
		$conn->close();
		
		return $ret;	
}


function escape_all($row, $conn){
	$row2 = array();
	foreach ($row as $key => $value) {
		$row2[$key] = $conn->real_escape_string($value);
	}
	return $row2;
}