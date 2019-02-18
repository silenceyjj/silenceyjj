<?php
	include "connect.php";
	if(isset($_GET["a"])){
		$a = $_GET["a"];
	}else if(isset($_POST["a"])){
		$a = $_POST["a"];
	}else{
		$a = "";
	}
	
	if(isset($_GET["mobileNum"])){
		$mobileNum = $_GET["mobileNum"];
	}else if(isset($_POST["mobileNum"])){
		$mobileNum = $_POST["mobileNum"];
	}else{
		$mobileNum = "";
	}
	if(isset($_GET["nickname"])){
		$nickname = $_GET["nickname"];
	}else if(isset($_POST["nickname"])){
		$nickname = $_POST["nickname"];
	}else{
		$nickname = "";
	}
	$password = isset($_POST["password"])?$_POST["password"]:"";
	$arr = Array();
	function getphone($checkname,$mobileNum,$str){
		global $conn,$arr;
//		$sql = "SELECT usermobile FROM usermsg WHERE usermobile='$mobileNum';";
		$sql = "SELECT $checkname FROM usermsg WHERE $checkname ='$mobileNum'";
		$res = $conn -> query($sql);
		$row = $res ->fetch_all(MYSQLI_ASSOC);
//		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		if(count($row)>0){
			$arr['code'] = 1;
			$arr['message'] = $str;
			return;
		}
		else{
			$arr['code'] = 0;
			$arr['message'] = '恭喜你，该用户名可以注册';
		}
	}
//	/*
//		验证用户名
//		get
//			guestbook/index.php
//				m : index
//				a : verifyUserName
//				mobileNum : 要验证的手机号码
//			返回
//				{
//					code : 返回的信息代码 0 = 没有错误，1 = 有错误
//					message : 返回的信息具体返回信息
//				}
//	*/
	
	if($a=="verifyMobilePhone"){
//		setcookie('mobileNum',$mobileNum, time() + 3600*60, '/');
		$checkname = "usermobile";
		$str = "该手机号已被使用";
		getphone($checkname,$mobileNum,$str);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if($a=="verifyNickName"){
		$checkname = "nickname";
		$str = "用户已存在！";
		getphone($checkname,$nickname,$str);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if($a=="reg"){
		$sql = "INSERT INTO usermsg(usermobile,userpsw,nickname) VALUES('$mobileNum','$password','$nickname')";
//		$sql = "INSERT INTO mobileNum(uname,upsw) VALUES('$mobileNum','$password')";
		if($conn ->query($sql)){
			$arr['code'] = 0;
			$arr['message'] = '注册成功';
			$sql = "SELECT * FROM usermsg WHERE usermobile='$mobileNum' AND userpsw='$password' AND nickname='$nickname'";
			$res = $conn -> query($sql);
			$row = $res ->fetch_all(MYSQLI_ASSOC);
			setcookie('uid', $row[0]['uid'], time() + 3600*60, '/');
			setcookie('mobileNum', $row[0]['usermobile'], time() + 3600*60, '/');
			setcookie('nickname', $row[0]['nickname'], time() + 3600*60, '/');
		}
//		else{
//			$arr['code'] = 1;
//			$arr['message'] = '注册失败';
//		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if($a=="login"){
		$sql1 = "SELECT * FROM usermsg WHERE usermobile='$mobileNum' AND userpsw='$password'";
		$res1 = $conn -> query($sql1);
		$row1 = $res1 ->fetch_all(MYSQLI_ASSOC);
		$sql2 = "SELECT * FROM usermsg WHERE nickname='$mobileNum' AND userpsw='$password'";
		$res2 = $conn -> query($sql2);
		$row2 = $res2 ->fetch_all(MYSQLI_ASSOC);
		if(count($row1)>0||count($row2)>0){
			$arr['code'] = 0;
			$arr['message'] = '登录成功';
			if(count($row1)>0){
				setcookie('uid', $row1[0]['uid'], time() + 3600*60, '/');
				setcookie('mobileNum', $row1[0]['usermobile'], time() + 3600*60, '/');
				setcookie('nickname', $row1[0]['nickname'], time() + 3600*60, '/');
			}else if(count($row2)>0){
				setcookie('uid', $row2[0]['uid'], time() + 3600*60, '/');
				setcookie('mobileNum', $row2[0]['usermobile'], time() + 3600*60, '/');
				setcookie('nickname', $row2[0]['nickname'], time() + 3600*60, '/');
			}
			
		}else{
			$arr['code'] = 1;
			$arr['message'] = '您的用户名或者密码不正确，请重新输入！';
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	
	}
	if($a=="logout"){
		if (!isset($_COOKIE['uid'])) {
			$arr['code'] = 1;
			$arr['message'] = '你还没有登录';
		} else {
			setcookie('uid',"", time() - 3600*60, '/');
			setcookie('mobileNum',"", time() - 3600*60, '/');
			setcookie('nickname',"", time() - 3600*60, '/');
			$arr['code'] = 0;
			$arr['message'] = '退出成功';
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
		
	
	
?>