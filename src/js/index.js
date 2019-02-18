$(function () {
	//用于关闭广告弹窗
	$(".buy_tips_close").click(function () {
		$("#buy_tips").css("display","none");
	})
	//用于显示中国区域
	$(".city").hover(function () {
		$(".city").addClass("cur")
		$(".city_l p").addClass("up");
		$(".cityList").css("display","block");
	},function () {
		$(".city").removeClass("cur");
		$(".city_l p").removeClass("up");
		$(".cityList").css("display","none");
	})
	//制作JSON假数据实现区域列表的渲染
	$.ajax({
		type:"get",
		url:"../api/city.php",
		async:true,
		success : function (str) {
			var arr = JSON.parse(str);
			var cityList = document.querySelector(".cityList");
			for(var i=0;i<arr.length;i++){
				var dl = document.createElement("dl");
				dl.innerHTML = "<dt>"+arr[i].region+"：</dt>";
				var dd = document.createElement("dd");
				dd.innerHTML = arr[i].allcity.map(function (item) {
					return "<a href='###;' id='p_"+item.id+"'>"+item.city+"</a>";
//					return "<a href='javascript:SetCity("+item.id+");id='p_"+item.id+">"+item.city+"</a>";
				}).join("");
				dl.appendChild(dd);
				cityList.appendChild(dl);
			}
		}
	});
	//点击省份做为当前省份
	$(".cityList").on("click","a",function () {
		$("a").removeClass("now");
		$(this).addClass("now");
		$("#cityInfo").html($(this).html());
	})
	//当鼠标移动到一定条件时出现
	function hover(ele1,ele2) {
		$(ele1).hover(function () {
			$(ele2).css("display","block")
			$(ele1).addClass("current");
		},function () {
			$(ele2).css("display","none")
			$(ele1).removeClass("current");
		})
	}
	hover(".tel",".tel_select");
	hover(".focus",".focus_select");
	hover(".menu",".menu_select");
//	if(cookie.get("nickname")){
//		$(".none").css("display","none");
//		var lis = document.createElement("li");
//		lis.className = "login";
//		lis.innerHTML = `
//					    <span>${decodeURI(cookie.get("nickname"))}</span><em></em>
//					    <div class="login_select none" style="display: none;">
//					        <a href="http://www.boqii.com/userinfo/">个人中心</a>
//					        <a href="http://www.boqii.com/userinfo/Order">我的订单</a>
//					        <a href="http://i.boqii.com/">我的主页</a>
//					        <a href="###" class="login_out">退出登录</a>
//					    </div>`;
//		$(".toolbar_r").prepend(lis);
//		$(".login").css("width",80);
//	}
//	hover(".login",".login_select");
	//退出登录
//	$(".login_out").click(function () {
//		$.ajax({
//			type:"post",
//			url:"../api/01.reg&login.php",
//			data:{
//				"m":"index",
//				"a":"logout"
//			},
//			success:function (str) {
//				var arr = JSON.parse(str);
//				if(!arr.code){
//					$(".none").css("display","block");
//					$(".login").css("display","none");
//				}
//			}
//		})
//	})
	$(".nav_main a:gt(0)").hover(function () {
		$(this).addClass("current");
	},function () {
		$(this).removeClass("current");
	})
	$(".nav_shop").hover(function () {
		$(".shop_cart").css("display","block");
		var timer = null;
		setTimeout(function () {
			$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！");
		},600);
	},function () {
		$(".cart_Tip").html("正在载入...");
		$(".shop_cart").css("display","none");
	})
	$(".shop_menu").hover(function () {
		$(this).addClass("current");
		$(this).find("span").css("display","none");
		$(".menu_detail").css("display","block");
	},function () {
		$(this).removeClass("current");
		$(this).find("span").css("display","block");
		$(".menu_detail").css("display","none");
	})
	//轮播图数据渲染
	function lunbo(str) {
		var arr = JSON.parse(str);
			$(".banner .swiper-wrapper").html(arr.map(function (item) {
				return `<a href="javascript:;" class="swiper-slide"><img src="${item.bannerimg}"/></a>`;
			}))
			var s1 = new Swiper('.banner .swiper-container', {
				autoplay: { //自动轮播+延时两秒
					delay:2000,
					disableOnInteraction:false
				},
				loop: true,//无缝回路轮播
				speed: 500,//切换速度
				effect : 'fade',
				pagination: {//焦点跟随
					el: '.swiper-pagination',
					clickable: true,//点击焦点跳到指定图片
					renderBullet: function(index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';//生成焦点数字
					}
				}
			});
		var oBox=document.getElementById('swiper-container');
				
		oBox.onmouseover=function(){//鼠标经过停止
			s1.autoplay.stop();
		}
				
		oBox.onmouseout=function(){//鼠标经过离开
			s1.autoplay.start();
		}
		var s2 = new Swiper('#zx .swiper-container',{	
			loop : true,//无缝
			navigation: {//上下按钮
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	}
	//热门图片数据渲染
	function hotimg(str) {
		var arr = JSON.parse(str);
		var qty = Math.ceil(arr.length/6);
		for(var i=0;i<qty;i++){
			var div = document.createElement("div");
			div.className = "hot_pro_b_con";
			for(var j=i*6;j<(i+1)*6;j++){
				var dl = document.createElement("dl");
				dl.innerHTML = `<dt>
									<a href="javascript:;"><img src="${arr[j].hotimg}" title="${arr[j].name}"/></a>
								</dt>
								<dd><a href="javascript:;" title="${arr[j].name}">${arr[j].name}</a></dd>
								<dd><span class="l">¥ ${arr[j].price}</span><span class="r">已售${arr[j].price}</span></dd>`;
				div.appendChild(dl);
			}
			$(".hot_pro_b").append(div);
			if(i>0){
				$(".hot_pro_b_con").eq(i).css("display","none");
			}
		}
		
	}
	function init(data,fn) {
		$.ajax({
			type:"get",
			url:"../api/list.php",
			async:true,
			data:data,
			success:function (str) {
				fn(str);
			}
		});
	}
	var data1 = {
		"m":"lunbo"
	}
	var data2 = {
		"m":"hotimg"
	}
	function goodajax(str) {
		var arr = JSON.parse(str);
			var div = document.createElement("div");
			div.className = "dog_c_t";
			if(arr[0].keyword=="狗粮"){
				
			}else{
				$(".dog_c_t").css("display","none");
			};
			div.innerHTML = arr.map(function (item) {
				return `<dl class="dog_c_t_1">
											<dt><a href="javascript:;"><img src="${item.imgurl}" title="${item.name}"/></a></dt>
											<dd><a href="javascript:;" title="${item.name}">${item.name}</a></dd>
											<dd><span class="l">¥ ${item.sold}</span><span class="r">已售${item.price}</span></dd>
										</dl>`;
			}).join("");
			$(".dog_body").append(div);
	}
	function gooddata(keyword) {
		$.ajax({
			type:"get",
			url:"../api/list.php",
			async:true,
			data: {
				"m":"goodlist",
				"keyword":keyword
			},
			success:function (str) {
				goodajax(str);
			}
		});
	}
	gooddata("狗粮");
	gooddata("湿粮");
	gooddata("零食");
	gooddata("保健品");
	gooddata("医疗");
	gooddata("沐浴露");
	gooddata("日用品");
	gooddata("美容");
	gooddata("玩具");
	gooddata("衣服窝");
	init(data1,lunbo);
	init(data2,hotimg);
	var num=0;
	$("#change_pro").click(function () {
		num++;
		if(num>2){
			num=0;
		}
		$(".hot_pro_b_con").css("display","none");
		$(".hot_pro_b_con").eq(num).css("display","block");
	})
	//狗狗商品 
	
	$(".dog_nav").find("a").hover(function () {
		$(this).parents(".dog_top").next().find(".dog_c_t").css("display","none");
		$(this).parents(".dog_top").next().find(".dog_c_t").eq($(this).index()).css("display","block");
		
	})
	//页面跳转
	$(".menu_body").on("click","a",function () {
		var str = $(this).html();
		location.href = "../html/list.html?"+str;
	})
	
})