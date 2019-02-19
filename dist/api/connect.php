<?php
	header("content-type:text/html;charset=utf-8");
	$servename = "localhost";
	$username = 'root';
	$password = "";
	$dbname = "boqi-data";
	$conn = new mysqli($servename,$username,$password,$dbname);
	
	if($conn->connect_error){
		die("连接失败:".$conn->connect_error);
	}
?>