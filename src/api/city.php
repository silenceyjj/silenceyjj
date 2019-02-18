<?php
	$path = "city.json";
	$file = fopen($path,"r");
	$content = fread($file,filesize($path));
	echo($content);
?>