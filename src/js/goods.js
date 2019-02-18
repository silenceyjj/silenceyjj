$(function () {
	$(".change").click(function () {
		if($(this).parents("span").attr("id")=="color"){
			$("#color .change").removeClass("active");
		}
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	})
	var str = location.search;
	var id = str.split("?")[1];
	var arr = [];
	if(!isNaN(id)){
		$.ajax({
			type:"get",
			url:"../api/list.php",
			async:true,
			data: {
				"m":"detail",
				"id":id
			},
			success:function (str) {
				arr = JSON.parse(str);
				$(".shop_name").html(arr[0].name);
				$(".shop_t_c_c").html(`<dl>
									<dt class="j">波 奇 价： </dt>
									<dd>
										<div class="bq_price fl">
											<div id="bqPrice">¥${arr[0].price}</div>
										</div>
									</dd>
								</dl>
								<dl>
									<dt>厂商指导价：</dt>
									<dd>
										<div class="oldprice" id="shPrice">¥${arr[0].price*1+5}.00</div>
									</dd>
								</dl>`);
				$(".goodslist").html(`<li>
												<div class="small-img">
													<img src="${arr[0].imgurl1}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="${arr[0].imgurl2}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="${arr[0].imgurl3}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="${arr[0].imgurl4}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="${arr[0].imgurl5}" />
												</div>
											</li>`);
				var magnifierConfig = {
					magnifier : "#magnifier1",//最外层的大容器
					width : 360,//承载容器宽
					height : 360,//承载容器高
					moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
					zoom : 3//缩放比例
				};
			
				var _magnifier = magnifier(magnifierConfig);
			
				/*magnifier的内置函数调用*/
				/*
					//设置magnifier函数的index属性
					_magnifier.setIndex(1);
			
					//重新载入主图,根据magnifier函数的index属性
					_magnifier.eqImg();
				*/
			}
		});
	
	}
	//放大镜特效
	$(".images-cover").hover(function () {
		$(".move-view").css("display","block");
	},function () {
		$(".move-view").css("display","none");
	})
	//遮罩特效
	function none() {
		$(".mask").css("display","none");
		$(".IAlertDialog").css("display","none");
		location.reload(true);
	}
	function mask(){
		$(".mask").css("display","block");
		$(".mask").css("opacity","0.3");
		$(".IAlertDialog").css("display","block");
	}
	function setout() {
		setTimeout(function () {
			none();
		},3000);
	}
	//数量限制

	$(".amount").on("click","span",function () {
		var val =$("#buynum").val();
		if($(this).attr("class")=="reduce"){
			val--;
			if(val<1){
				val=1;
				mask();
				$(".IDialogText").html("<span>最少购买1件</span>");
			}
		}else if($(this).attr("class")=="add"){
			val++;
			if(val>99){
				val=99;
				mask()
				$(".IDialogText").html("<span>最多购买99件</span>");
			}
		}
		$("#buynum").val(val);
		setout();
	})
	$(".IDialogClose").click(function () {
		none();
	})
	var timer=null;
	//点击加入购物车;

	$("#intocar_btn").click(function () {
		var goodnum = $("#buynum").val();
		var str = "";
		if(!cookie.get("nickname")){
			if(nownum>99){
				nownum=99;
				mask();
				$(".IDialogText").html(`<span>数量大于商品库存数量</span><div class="go_url_operation">
					<a href="cart.html" class="myFav">查看购物车</a>
				</div>`);
				setout();
			}else{
				mask();
				$(".IDialogText").html(`<span>已成功将商品加入购物车</span><div class="go_url_operation">
					<a href="cart.html" class="myFav">查看购物车</a>
				</div>`);
				setout();
			}
		}else{
			var uid = cookie.get("uid");
			$.ajax({
			type:"get",
			url:"../api/cart.php",
			data:{
				"m":"list",
				"uid":uid,
				"id":arr[0].id,
				"imgurl":arr[0].imgurl,
				"name":arr[0].name,
				"price":arr[0].price,
				"num":$("#buynum").val()
			},
			async:true,
			success:function (str) {
				mask();
				$(".IDialogText").html(`<span>${str}</span><div class="go_url_operation">
					<a href="cart.html" class="myFav">查看购物车</a>
				</div>`);
				setout();
			}
		});
		}
		var oldid = cookie.get("id");
			var oldnum = cookie.get("num");
			if(cookie.get("id")){
				var idarr = oldid.split(",");
				var numarr = oldnum.split(",");
				if(idarr.indexOf(arr[0].id)<0){
					cookie.set("id",arr[0].id+","+oldid,"");
					cookie.set("num",goodnum+","+oldnum,"");
				}else{
					var nownum = numarr[idarr.indexOf(arr[0].id)]*1;
					nownum = nownum+goodnum*1;
					numarr[idarr.indexOf(arr[0].id)]=String(nownum);
					str = numarr.join(",");
					cookie.set("num",str,"");
				}
			}else{
				var nownum = $("#buynum").val();
				cookie.set("id",arr[0].id,"");
				cookie.set("num",goodnum,"");
			}
	})
	//授权文件显示隐藏
	$(".sqimg").hover(function () {
		$(".sqimg img").show();
	},function () {
		$(".sqimg img").hide();
	})
})
