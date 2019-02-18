$(function () {
	//登录前后样式变化
	if(cookie.get("nickname")){
		$(".login_tips").css("display","none");
	}else{
		$(".login_tips").css("display","block");
	}
	$(".login_out").click(function () {
		$(".login_tips").css("display","block");
	})
	//计算当前元素的小计
	var countele = null;
	function count(now) {
		var num = now.val()*1;
		var price = now.parents("li").find(".cart_column_04 .product_price").html()*1;
		var totalPrice = (num*price).toFixed(2);
		now.parents("li").find(".product_total .product_price").html(totalPrice)
//		now.parents("li").find(".product_total .product_price").html(totalPrice);
	}
	var btnarr = [];
	function countAll() {
		btnarr = [];
		for(var i=0;i<$(".check_btn").size();i++){
			if($(".check_btn").eq(i).prop("checked")){
				btnarr.push(i);
			};
		}
		var num = 0;
		var price = 0;
		var weight = 0;
		var totalprice = 0;
		for(var i=0;i<btnarr.length;i++){
			num += $(".product_nums").eq(btnarr[i]).val()*1;
			totalprice += $(".product_total .product_price").eq(btnarr[i]).html()*1;
		}
		$(".item_sum").html(num);
		$(".product_sum").html("¥"+totalprice.toFixed(2));
		$(".s_money").html(`总价= 商品总价:&nbsp;¥${totalprice.toFixed(2)}
				    +
                 	全球购商品税费:&nbsp;¥0.00`);
	}
	
	//购物车数量变化
	function cart(str) {
		var arr = JSON.parse(str);
		if(arr.code){
			$("#wrap2").css("display","block");
			$(".cart_footer").css("display","block");
			$(".cart_goodslist").html(arr.list.map(function (item) {
					return `<li id="${item.id}" class="clearfix">
							<div class="cart_column_01">
								<input type="checkbox"  class="check_btn" checked="checked"/>
								<a href="###">
									<img src="${item.imgurl}" class="product_img"/>
								</a>
							</div>
							<div class="cart_column_02">
								<a href="###" class="product_name">
									${item.name}
								</a>
								<p class="product_spec">
									规格: 
           							柯基,塑料扇
           							<span class="tags">品牌直送</span>
								</p>
								
							</div>
							<div class="cart_column_03">
								<span class="weight">0.20kg</span>
							</div>
							<div class="cart_column_04">
								<span class="product_price">${item.price}</span>
							</div>
							<div class="cart_column_05">
								<span style="text-indent:-99999px;">&nbsp;</span>
							</div>
							<div class="cart_column_06">
								<div class="product_price_modify clearfix">
									<a href="javascript:;" class="IDecNum decrease">-</a>
									<input type="text" value="${item.num}" class="IGoodsNum product_nums">
									<a href="javascript:;" class="IIncNum increase">+</a>
								</div>
							</div>
							<div class="cart_column_07">
								<p class="product_total">
									<strong class="product_price">10.90</strong>
								</p>
							</div>
							<div class="cart_column_08">
								<a href="###" class="IAddFavorites product_operation">移入收藏</a>
								<br />
								<a href="javascript:;" class="ICartRemove product_operation delete_shopcart">删除</a>
							</div>
						</li>`;
				}));

		}else{
			$("#wrap").css("display","block");
			$("#wrap2").css("display","none");
			$(".cart_footer").css("display","none");
		}
		for(var i=0;i<$(".cart_goodslist li").size();i++){
			var cur = null;
			cur = $(".product_nums").eq(i);
			count(cur);
		}
		var data ={
			"m":"change"
		}
		countAll();
		checkbtn();
		
		//遮罩特效
		function none() {
			$(".mask").css("display","none");
			$(".IAlertDialog").css("display","none");
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
		$(".IDialogClose").click(function () {
			none();
		})
		
		//商品数量变化函数
		function changeNum (data) {
			$.ajax({
				type:"get",
				url:"../api/cart.php",
				async:true,
				data:data,
				success:function (str) {
					init();
					if(countele!=null){
						count(countele);
					}
				}
			});
		}
		//没有初始化的交互
		function jiaohu(data) {
			$.ajax({
				type:"get",
				url:"../api/cart.php",
				async:true,
				data:data,
				success:function (str) {
//					init();
					if(countele!=null){
						count(countele);
					}
				}
			});
		}
		//数量限制出现遮罩
		function showNum(ele,id,val) {
			if(val>99){
				val=99;
				mask();
				$(".IDialogText").html("<span>购物车最大商品数量不能超过99件</span>");
			}else if(val<1){
				val=1;
				mask();
				$(".IDialogText").html("<span>最少购买一件</span>");
			}
			else if(isNaN(val)){
				val=1;
				mask();
				$(".IDialogText").html("<span>商品数量设置失败</span>");
			}
			ele.val(val);
			if(!cookie.get("nickname")){
				var oldid = cookie.get("id");
				var oldnum = cookie.get("num");
				var idarr = oldid.split(",");
				var numarr = oldnum.split(",");
				var nownum = numarr[idarr.indexOf(id)]*1;
				nownum = val*1;
				numarr[idarr.indexOf(id)]=String(nownum);
				str = numarr.join(",");
				cookie.set("num",str,"");
			}else{
				data.id = id;
				data.num = val;
				data.uid = cookie.get("uid");
				jiaohu(data);
			}
			
			setout();
		}
		//计算总合
		$(".product_nums").blur(function () {
			var val = $(this).val()*1;
			var id = $(this).parents("li").attr("id");
			showNum($(this),id,val);
			countele = $(this);
			countAll();
		})
		$(".product_price_modify").on("click","a",function () {
			var val = $(this).siblings(".product_nums").val();
			if($(this).hasClass("increase")){
				val++;
				}else if($(this).hasClass("decrease")){
					val--;
				};
				var id = $(this).parents("li").attr("id");
				var ele = $(this).siblings(".product_nums");
				showNum(ele,id,val);
				count(ele);
				countAll();
		})
		
		function deleteCheck(id) {
			var str1 = "";
			var str2 = "";
			if(!cookie.get("nickname")){
				if(cookie.get("id")){
					var cookieid = cookie.get("id");
					var idarr = cookieid.split(",");
					var cookienum = cookie.get("num");
					var numarr = cookienum.split(",");
					numarr.splice(idarr.indexOf(id),1);
					var deleteid = idarr.splice(idarr.indexOf(id),1);
					str1 = idarr.join(",");
					str2 = numarr.join(",");
					console.log(str1,str2);
					cookie.set("id",str1,"");
					cookie.set("num",str2,"");
					init();
					data.id = deleteid;
					data.m = "delete";
				}
			}else{
				data.id = id;
				data.m = "delete";
			}
			changeNum(data);
			countAll();
		}
		$(".delete_shopcart").click(function () {
			var id = $(this).parents("li").attr("id");
			deleteCheck(id);
		})
		$(".delete_shopcarts").click(function () {
			var length = $(".cart_goodslist li").size();
			for(var i=0;i<length;i++){
				if($(".check_btn").eq(i).prop("checked")){
					var id = $(".check_btn").eq(i).parents("li").attr("id");
					deleteCheck(id);
				}
			}
		})
		//点击全选时实现所有input的全选和不选
		function allcheck(ele) {
			if(ele.prop("checked")){
				ele.prop("checked","checked");
				$(".check_btn").prop("checked","checked");
			}else{
				ele.removeAttr("checked");
				$(".check_btn").removeAttr("checked");
			}
		}
		function checkbtn() {
//			console.log(btnarr.length);
			if(btnarr.length<$(".check_btn").size()){
				$("#allchecked1").removeAttr("checked");
				$("#allchecked2").removeAttr("checked");
			}
			if(btnarr.length==$(".check_btn").size()){
				$("#allchecked1").prop("checked","checked");
				$("#allchecked2").prop("checked","checked");
			}
		}
		$("#allchecked1").on("click",function () {
			allcheck($(this));
			countAll();
			checkbtn();
		})
		$("#allchecked2").on("click",function () {
			allcheck($(this));
			countAll();
			if($("#allchecked2").prop("checked")){
				$("#allchecked1").prop("checked","checked");
			}else{
				$("#allchecked1").removeAttr("checked");
			}
		})
		$(".cart_goodslist").on("click",".check_btn",function () {
			countAll();
			checkbtn();
		});
		
		
	}
	//数据渲染初始化
	function init() {
		if(!cookie.get("nickname")){
			if(cookie.get("id")){
				var id = cookie.get("id");
				var idarr = id.split(",");
				var cookienum = cookie.get("num");
				var numarr = cookienum.split(",");
					$.ajax({
					type:"get",
					url:"../api/list.php",
					async:true,
					data:{
						"m":"nologin",
						"idarr":idarr,
						"numarr":numarr
					},
					success:function (str) {
						cart(str);
					}
				});
			}else{
				$("#wrap").css("display","block");
				$("#wrap2").css("display","none");
				$(".cart_footer").css("display","none");
			}
			
		}
		else{
			var uid = cookie.get("uid");
			$.ajax({
				type:"get",
				url:"../api/cart.php",
				async:true,
				data:{
					"m":"cart",
					"uid":uid
				},
				success:function (str) {
					cart(str);
				}
			});
		}
		
	}
	$(".login_out").click(function () {
        $.ajax({
            type:"post",
            url:"../api/01.reg&login.php",
            data:{
                "m":"index",
                "a":"logout"
            },
            success:function (str) {
                var arr = JSON.parse(str);
                if(!arr.code){
                    $(".none").css("display","block");
                    $(".login").css("display","none");
                    init();
                }
            }
        })
    })
	init();
})
