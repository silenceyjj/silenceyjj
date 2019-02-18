$(function () {
	$(".login-tab").on("click",function () {
		$(".login-tab").removeClass("cur");
		$("#login-msg").css("display","none");
		$(this).addClass("cur");
		$(".login-by").css("display","none");
		$(".login-by").eq($(this).index()).css("display","block");
		$(".login-right ul").css("height",200);
		if($(this).index()==1){
			$(".login-right ul").css("height",140);
		}
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
	var isok = false;
	$("#yzm-txt").blur(function () {
		var yzm_val = $("#yzm-txt").val();
		$("#yzm_tip span").css("display","block");
		$("#yzm_tip span").removeClass("suc yzmerr");
		if(stryzm.toLowerCase()==yzm_val){
			$("#yzm_tip span").addClass("suc");
			isok=true;
		}else{
			$("#yzm_tip span").addClass("yzmerr");
			isok=false;
		}
	})
	$(".login-by").on("blur","input",function () {
		var val = $(this).val();
		if(val.trim()){
			$("#login-msg").css("display","none");
			$(".login-right ul").css("height",200);
		}
		else{
			$("#login-msg").css("display","block");
			$(".login-right ul").css("height",252);
			if($(this).attr("id")=="uname"){
				$("#login-msg").html("请输入用户名或者邮箱或者手机号！");
			}else if($(this).attr("id")=="upsw"){
				$("#login-msg").html("请输入密码！");
			}else if($(this).attr("id")=="yzm-txt"){
				$("#login-msg").html("请输入验证码！");
			}
		}
	})
	$("#login").on("click",function () {
		$("#login-msg").css("display","block");
		$(".login-right ul").css("height",252);
		var uname_val = $("#uname").val();
		var upsw_val = $("#upsw").val();
		if(!uname_val.trim()){
			$("#login-msg").html("请输入用户名或者邮箱或者手机号！");
		}else{
			if(!upsw_val.trim()){
				$("#login-msg").html("请输入密码！");
			}else{
				if(isok){
					$("#login-msg").css("display","none");
					$(".login-right ul").css("height",200);
					$.ajax({
						type:"post",
						url:"../api/01.reg&login.php",
						data:{
							"m":"index",
							"a":"login",
							"mobileNum": uname_val,
							"password": upsw_val,
							"nickname": uname_val
						},
						success:function (str) {
							var arr = JSON.parse(str);
							
							if(!arr.code){
								//将没有登录的cookie数据添加到登录后该用户的数据库
								if(cookie.get("nickname")){
									if(cookie.get("id")){
										var cookienum = cookie.get("num");
									var cookieid = cookie.get("id");
									var idarr = cookieid.split(",");
									var numarr = cookienum.split(",");
										for(let i=0;i<idarr.length;i++){
										$.ajax({
											type:"get",
											url:"../api/list.php",
											async:true,
											data: {
												"m":"detail",
												"id":idarr[i]
											},
											success:function (str) {
												var arr = JSON.parse(str);
												$.ajax({
													type:"get",
													url:"../api/cart.php",
													data:{
														"m":"list",
														"uid":cookie.get("uid"),
														"id":arr[0].id,
														"imgurl":arr[0].imgurl,
														"name":arr[0].name,
														"price":arr[0].price,
														"num":numarr[i]
													},
													async:true,
													success:function (str) {
														console.log(str);
														var timer = null;
															timer = setInterval(function () {
																location.href = "../html/main.html"
															});
													}
												})
											}	
										})
									}
									}else{
										var timer = null;
															timer = setInterval(function () {
																location.href = "../html/main.html"
															});
									}
								}
								
							}else{
								getyzm();
								$("#login-msg").css("display","block");
								$(".login-right ul").css("height",252);
								$("#login-msg").html(arr.message);
							}
						}
					});
	//			
				}else{
					if(!$("#yzm-txt").val().trim()){
						$("#login-msg").html("请输入验证码！");
					}
					$("#login-msg").html("验证码不正确！");
					getyzm();
				}
			}
		}
	})
})
