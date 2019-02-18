<?php
	header("content-type:text/html;charset=utf-8");
	$servename = "localhost";
		$username = 'root';
		$password = "";
		$dbname = "boqi-mainlist";
		$conn = new mysqli($servename,$username,$password,$dbname);
		if($conn->connect_error){
			die("连接失败:".$conn->connect_error);
		}
		$m = isset($_GET["m"])?$_GET["m"]:"";
		$id = isset($_GET["id"])?$_GET["id"]:"";
		$page = isset($_GET["page"])?$_GET["page"]:"";
		$qty = isset($_GET["page"])?$_GET["qty"]:"";
		$idarr = isset($_GET["idarr"])?$_GET["idarr"]:"";
		$numarr = isset($_GET["numarr"])?$_GET["numarr"]:"";
		$keyword = isset($_GET["keyword"])?$_GET["keyword"]:"";
		$yeshu =($page-1)*$qty;
		$arr = Array();
		$str = "";
		if($m=="lunbo"){
			$sql1 = "SELECT * FROM mainlist WHERE bannerimg IS NOT NULL";
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			echo json_encode($row1,JSON_UNESCAPED_UNICODE);
		}
		if($m=="hotimg"){
			$sql1 = "SELECT * FROM mainlist WHERE hotimg IS NOT NULL";
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			echo json_encode($row1,JSON_UNESCAPED_UNICODE);
		}
		if($m=="goodlist"){
			$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword'";
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			echo json_encode($row1,JSON_UNESCAPED_UNICODE);
		}
		if($m=="nologin"){
			for($i=0;$i<count($idarr);$i++){
				if(count($idarr)==0){
					$str .=" id=$idarr[$i]";
				}else{
					if($i<count($idarr)-1){
						$str .=" id=$idarr[$i] OR";
					}else{
						$str.=" id=$idarr[$i]";
					}
				}
			}
//			echo $str;
			$sql1 = "SELECT * FROM mainlist WHERE $str";
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			if(count($row1)<1){
				$arr['code'] = 0;
			}else{
				for($i=0;$i<count($idarr);$i++){
					$row1[$i]['num'] = $numarr[$i];
				}
				$arr['code'] = 1;
				$arr['list'] = $row1;
			}
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		}
		if($m=="detail"){
			$sql1 = "SELECT * FROM mainlist WHERE id='$id'";
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			echo json_encode($row1,JSON_UNESCAPED_UNICODE);
		}
		if($m=="init"||$m=="sold"||$m=="price"||$m=="comment"){
			if($m=="init"){
				$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword'";
			}
			if($m=="sold"){
				$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword' order by sold desc";
			}
			if($m=="price"){
				$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword' order by price desc";
			}
			if($m=="comment"){
				$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword' order by comment desc";
			}
			
			$res1 = $conn -> query($sql1);
			$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
			$res = array_slice($row1,($page-1)*$qty,$qty);	
			$datalist = array(
				"total"=> count($row1),
				"list"=>$res,
				"page"=>$page,
				"qty"=>$qty
			);
			echo json_encode($datalist,JSON_UNESCAPED_UNICODE);if($m=="init"){
				$sql1 = "SELECT * FROM mainlist WHERE keyword='$keyword'";
			}
		}
		$conn -> close();
?>