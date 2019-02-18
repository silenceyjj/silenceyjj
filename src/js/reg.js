$(function () {
	//实现li高度变化以及border的变化
	$(".headerbar-right").on("mouseover","li",function () {
		if($(this).attr("class")=="head-weibo" || $(this).attr("class")=="head-wechat" || $(this).attr("class")=="head-phone"){
			$(this).addClass("current");
			$(this).find('div').css("display","block");
		}
	})
	$(".headerbar-right").on("mouseout","li",function () {
		$(this).find('div').css("display","none");
		$(this).removeClass("current");
	})
	var mobile_val;
	var psw_val;
	var repsw_val;
	var nickname_val;
	//6个isok是否可以进行注册
	var isok = [false,false,false,false,false];
	//正则验证调用函数
	function regyzm (ok,val,isok) {
		if(val.trim()){
			if(ok){
				isok = true;
			}else{
				isok = false;
			}
		}
		return isok;
	}
	function allReg (obj,val,isok,str1,str2) {
		$(obj).css("display","block");
		$(obj).html("");
		$(obj).removeClass("suc err");
		if(val.trim()){
			if(isok){
				$(obj).addClass("suc");
			}else{
				$(obj).addClass("err");
				$(obj).html(str1);
			}
		}else{
			$(obj).addClass("err");
			$(obj).html(str2);
		}
	}
	//手机号码正则验证
	$("#mobile").blur(function () {
		mobile_val= $("#mobile").val();
		isok[0] = regyzm(checkReg.tel(mobile_val),mobile_val,isok[0]);
		//用ajax验证手机号码是否已被使用
		$.ajax({
			type:"get",
			url:"../api/01.reg&login.php",
			data:{
				"m":"index",
				"a":"verifyMobilePhone",
				"mobileNum":mobile_val
			},
			success:function (str) {
				var arr = JSON.parse(str);
				if(arr.code){
					$("#mobile_tip").css("display","block");
					$("#mobile_tip").removeClass("suc err");
					$("#mobile_tip").addClass("err");
					$("#mobile_tip").html(arr.message);
					isok[0]=false;
				}else{
					var str1 = "请输入正确的手机号码！";
					var str2 = "请输入手机号码";
					allReg("#mobile_tip",mobile_val,isok[0],str1,str2);
				}
			}
		});
	})
	//密码正则验证
	$("#password").blur(function () {
		psw_val = $("#password").val();
		isok[1] = regyzm(checkReg.psweasy(psw_val),psw_val,isok[1]);
		var str1 = "请输入正确的密码格式！";
		var str2 = "请输入密码！";
		allReg("#password_tip",psw_val,isok[1],str1,str2);
	})
	//确认密码验证
	$("#repassword").blur(function () {
//		psw_val = $("#password").val();
		repsw_val = $("#repassword").val();
		isok[2] = regyzm(checkReg.pswagain(psw_val,repsw_val),repsw_val,isok[2]);
		var str1 = "您输入的两次密码不一致！";
		var str2 = "请再次输入密码！";
		allReg("#repassword_tip",repsw_val,isok[2],str1,str2);
	})
	//用户名验证
	$("#nickname").blur(function () {
		nickname_val = $("#nickname").val();
		isok[3] = regyzm(checkReg.nickname(nickname_val),nickname_val,isok[3]);
		$.ajax({
			type:"get",
			url:"../api/01.reg&login.php",
			data:{
				"m":"index",
				"a":"verifyNickName",
				"nickname":nickname_val
			},
			success:function (str) {
				var arr = JSON.parse(str);
				if(arr.code){
					$("#nickname_tip").css("display","block");
					$("#nickname_tip").removeClass("suc err");
					$("#nickname_tip").addClass("err");
					$("#nickname_tip").html(arr.message);
					isok[3]=false;
				}else{
					var str1 = "请输入正确的昵称格式";
					var str2 = "请输入昵称！";
					allReg("#nickname_tip",nickname_val,isok[3],str1,str2);
					if(!isok[3]){
						if(nickname_val.length<2&&nickname_val.length>0){
							$("#nickname_tip").addClass("err");
							$("#nickname_tip").html("用户昵称不能小于2位！");
						}else if(nickname_val.length>10){
							$("#nickname_tip").addClass("err");
							$("#nickname_tip").html("用户昵称不能大于10位！");
						}
					}
				}
			}
		});
	})
	var stryzm = randomCode();
	function getyzm () {
		stryzm = randomCode();
		var arr = stryzm.split("");
		for(var i=0;i<arr.length;i++){
			$("#yzm-code span").eq(i).html(arr[i]);
			$("#yzm-code span").eq(i).css("color",randomColor(16));
			var degNum = randomNum(-45,45)+'deg';
			var deg = `rotate(${degNum})`;
			$("#yzm-code span").eq(i).css("transform",deg);
		}
		$("#yzm-code").css("text-decoration-color",randomColor(16));
	}
	getyzm();
	$("#change").on("click",function () {
		getyzm();
	})
	$("#reg-yzm").blur(function () {
		var yzm_val = $("#reg-yzm").val();
		$("#yzm_tip").css("display","block");
		$("#yzm_tip").removeClass("suc yzmerr");
		if(stryzm.toLowerCase()==yzm_val){
			$("#yzm_tip").addClass("suc");
			isok[4]=true;
		}else{
			$("#yzm_tip").addClass("yzmerr");
			isok[4]=false;
		}
	})
	$("#reg").on("click",function () {
		if(!isok[4]){
			getyzm();
		}
		if($("#login-box").prop("checked")){
			if(isok.indexOf(false)<0){
				$.ajax({
					type:"post",
					url:"../api/01.reg&login.php",
					data:{
						"m":"index",
						"a":"reg",
						"mobileNum": mobile_val,
						"password": psw_val,
						"nickname": nickname_val
					},
					success:function (str) {
						var arr = JSON.parse(str);
						if(!arr.code){
							var timer = null;
							timer = setInterval(function () {
								location.href = "../html/main.html"
							});
						}	
					}
				});
			};
		};
	})
})