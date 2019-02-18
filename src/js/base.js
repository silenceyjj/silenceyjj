$(function () {
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
//                  return "<a href='javascript:SetCity("+item.id+");id='p_"+item.id+">"+item.city+"</a>";
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
    if(cookie.get("nickname")){
        $(".none").css("display","none");
        var lis = document.createElement("li");
        lis.className = "login";
        lis.innerHTML = `
                        <span>${decodeURI(cookie.get("nickname"))}</span><em></em>
                        <div class="login_select none" style="display: none;">
                            <a href="http://www.boqii.com/userinfo/">个人中心</a>
                            <a href="http://www.boqii.com/userinfo/Order">我的订单</a>
                            <a href="http://i.boqii.com/">我的主页</a>
                            <a href="###" class="login_out">退出登录</a>
                        </div>`;
        $(".toolbar_r").prepend(lis);
        $(".login").css("width",80);
    }
    hover(".login",".login_select");
	//退出登录
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
                }
                if(!cookie.get("nickname")){
                	location.reload(true);
                }
            }
        })
        
    })
//导航栏以及购物车相关信息
    $(".nav_main a:gt(0)").hover(function () {
        $(this).addClass("current");
    },function () {
        $(this).removeClass("current");
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
    $(".nav_auto").on("mouseover","div",function () {
        if($(this).attr("class")=="nav_left"){
            $(".order").css("display","block");
        };
    })
    $(".nav_auto").on("mouseout","div",function () {
        if($(this).attr("class")=="nav_left"){
            $(".order").css("display","none");
        };
    })
//全部商品分类特效
    $(".order").on("mouseover","div",function () {
        $(".order").css("display","block");

    })
    $(".order").on("mouseout","div",function () {
        
        $(".order").css("display","none");

    })
    $(".order").hover(function () {
        $(this).addClass("current");
        $(this).find("span").css("display","none");
        $(".menu_detail").css("display","block");
    },function () {
        $(this).removeClass("current");
        $(this).find("span").css("display","block");
        $(".menu_detail").css("display","none");
    })
    //品牌分类
    $(".goodsCateSubTitle").click(function () {
		$(this).parent().find(".goodsCateSub").toggle();
		if($(this).find("i").hasClass("active")){
			$(this).css("border-bottom","1px solid #ddd");
			if($(this).parents("li").index()==4){
				$(this).css("border-bottom","none");
			}
			$(this).find(".arrow_down").removeClass("active");
		}else{
			$(this).find(".arrow_down").addClass("active");
			$(this).css("border-bottom","none");
		}
	})
    var goodnum = 0;
    var uid = cookie.get("uid");
    function goodsNum() {
		function cartnum(arr) {
			if(arr){
				$(".nav_shop").hover(function () {
					$(".shop_cart").css("display","block");
					var timer = null;
					if(arr.length){
						setTimeout(function () {
							$(".cart_Tip").css("display","none");
							$(".cart_List").html(`<div class="shop_tit">已加入购物车中的商品</div>`);
							var div = document.createElement("div");
							div.className = "shop_body";
							div.innerHTML = arr.map(function (item) {
								return `<div class="shop_list">
									<div class="shop_img fl">
										<a href="javascript:;">
											<img src="${item.imgurl}" alt="${item.name}"/>
										</a>
									</div>
									<div class="shop_numb fl">
										<div class="ITopCartInc shop_jia ">+</div>
										<input type="text" class="ITopCartInput " value="${item.num}" base="1">
										<div class="ITopCartDec shop_jian">-</div>
									</div>
									<dl class="fr">
										<dt><a href="javascript:;">${item.name}</a></dt>
										<dd>
											<span class="shop_price fl">¥ ${item.price}</span>
											<span class="ITopCartGoodsRemove del fr">删除</span>
										</dd>
									</dl>
								</div>`
							}).join();
							$(".cart_List").append(div);
						},600);
						
					}
					},function () {
						$(".cart_Tip").html("正在载入...");
						$(".shop_cart").css("display","none");
					})
			}else{
				$(".nav_shop").hover(function () {
					$(".shop_cart").css("display","block");
					setTimeout(function () {
							$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！");
					},600);		
				},function () {
					$(".cart_Tip").html("正在载入...");
					$(".shop_cart").css("display","none");
				})
			}			
		}
    	if(!cookie.get("nickname")){
    		if(cookie.get("id")){
    			var cookienum = cookie.get("num");
    			var cookieid = cookie.get("id");
    			var idarr = cookieid.split(",");
				var numarr = cookienum.split(",");
				var goodarr = [];
				for(var i=0;i<idarr.length;i++){
					goodnum += numarr[i]*1;
				}
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
							for(var j=0;j<arr.length;j++){
								arr[j].num = numarr[i];
								goodarr.push(arr[j]);
							}
							cartnum(goodarr);
						}	
					})
					
				}
		    	
	    	}else{
				$(".nav_shop").hover(function () {
					$(".shop_cart").css("display","block");
					setTimeout(function () {
							$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！");
					},600);		
				},function () {
					$(".cart_Tip").html("正在载入...");
					$(".shop_cart").css("display","none");
				})
			}
				
	   }else{
			$.ajax({
				type:"get",
				url:"../api/cart.php",
				async:true,
				data:{
					"m":"cart",
					"uid":uid
				},
				success:function (str) {
					var arr = JSON.parse(str);
					if(arr){
						cartnum(arr.list);
					}
					
				}
			});
	    }
	    $(".goodNum").html(goodnum);
	    $(".i_sbar_nub").html(goodnum);
    }
    goodsNum();
    if(cookie.get("nickname")){
    	$.ajax({
				type:"get",
				url:"../api/cart.php",
				async:true,
				data:{
					"m":"cart",
					"uid":uid
				},
				success:function (str) {
					var arr = JSON.parse(str);
					if(arr.code){
						for(var i=0; i<arr.list.length;i++){
							goodnum += arr.list[i].num*1;
							$(".goodNum").html(goodnum);
							$(".i_sbar_nub").html(goodnum);
						}
					}
				}
		});
    }
    $("#sider_returntop").click(function () {
    	var speed = 100;
    	$("body,html").animate({scrollTop: 0}, speed);
    })
})