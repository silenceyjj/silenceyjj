<?php
	include "connect.php";
	$m = isset($_GET["m"])?$_GET["m"]:"";
	$uid = isset($_GET["uid"])?$_GET["uid"]:"";
	$id = isset($_GET["id"])?$_GET["id"]:"";
	$imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:"";
	$name = isset($_GET["name"])?$_GET["name"]:"";
	$price = isset($_GET["price"])?$_GET["price"]:"";
	$num = isset($_GET["num"])?$_GET["num"]:"";
	
	$arr = Array();
	function show($m,$num,$uid,$id){
		global $conn,$uid,$id,$imgurl,$name,$price,$num;
		$sql1 = "SELECT * FROM cart WHERE id='$id' and uid='$uid'";
		$res = $conn -> query($sql1);
		$row = $res ->fetch_all(MYSQLI_ASSOC);
		if(count($row)<1){
			$sql2 = "INSERT INTO cart (uid,id,imgurl,name,price,num) VALUES('$uid','$id','$imgurl','$name','$price','$num')";
			if($conn->query($sql2)){
				echo "已成功将商品加入购物车！";
			}else{
			}
		}
		else{
			$sql1 = "SELECT * FROM cart WHERE id='$id' and uid='$uid'";
			$res = $conn -> query($sql1);
			$row = $res ->fetch_all(MYSQLI_ASSOC);
			if($m=="list"){
				$num = $row[0]['num']*1+$num;
			}
			if($num<100){
				$sql2 = "UPDATE cart set num='$num' WHERE id='$id' and uid ='$uid'";
					if($conn->query($sql2)){
						echo "已成功将商品加入购物车！";
					}
			}else{
				echo "数量大于商品库存数量！";
			}
		}
	}
	if($m=="list"){
		show($m,$num,$uid,$id);
	}
	if($m=="change"){
		show($m,$num,$uid,$id);
	}
	if($m=="cart"){
		$sql1 = "SELECT * FROM cart where uid='$uid'";
		$res = $conn -> query($sql1);
		$row = $res ->fetch_all(MYSQLI_ASSOC);
		if(count($row)<1){
			$arr['code'] = 0;
		}else{
			$arr['code'] = 1;
			$arr['list'] = $row;
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if($m=="delete"){
//		echo $uid;
		$sql = "DELETE FROM cart WHERE id='$id'";
		mysqli_query($conn,$sql);
	}
	
?>