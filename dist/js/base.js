"use strict";$(function(){function t(t,s){$(t).hover(function(){$(s).css("display","block"),$(t).addClass("current")},function(){$(s).css("display","none"),$(t).removeClass("current")})}if($(".city").hover(function(){$(".city").addClass("cur"),$(".city_l p").addClass("up"),$(".cityList").css("display","block")},function(){$(".city").removeClass("cur"),$(".city_l p").removeClass("up"),$(".cityList").css("display","none")}),$.ajax({type:"get",url:"../api/city.php",async:!0,success:function(t){for(var s=JSON.parse(t),n=document.querySelector(".cityList"),i=0;i<s.length;i++){var e=document.createElement("dl");e.innerHTML="<dt>"+s[i].region+"：</dt>";var o=document.createElement("dd");o.innerHTML=s[i].allcity.map(function(t){return"<a href='###;' id='p_"+t.id+"'>"+t.city+"</a>"}).join(""),e.appendChild(o),n.appendChild(e)}}}),$(".cityList").on("click","a",function(){$("a").removeClass("now"),$(this).addClass("now"),$("#cityInfo").html($(this).html())}),t(".tel",".tel_select"),t(".focus",".focus_select"),t(".menu",".menu_select"),cookie.get("nickname")){$(".none").css("display","none");var s=document.createElement("li");s.className="login",s.innerHTML="\n                        <span>"+decodeURI(cookie.get("nickname"))+'</span><em></em>\n                        <div class="login_select none" style="display: none;">\n                            <a href="http://www.boqii.com/userinfo/">个人中心</a>\n                            <a href="http://www.boqii.com/userinfo/Order">我的订单</a>\n                            <a href="http://i.boqii.com/">我的主页</a>\n                            <a href="###" class="login_out">退出登录</a>\n                        </div>',$(".toolbar_r").prepend(s),$(".login").css("width",80)}t(".login",".login_select"),$(".login_out").click(function(){$.ajax({type:"post",url:"../api/01.reg&login.php",data:{m:"index",a:"logout"},success:function(t){JSON.parse(t).code||($(".none").css("display","block"),$(".login").css("display","none")),cookie.get("nickname")||location.reload(!0)}})}),$(".nav_main a:gt(0)").hover(function(){$(this).addClass("current")},function(){$(this).removeClass("current")}),$(".shop_menu").hover(function(){$(this).addClass("current"),$(this).find("span").css("display","none"),$(".menu_detail").css("display","block")},function(){$(this).removeClass("current"),$(this).find("span").css("display","block"),$(".menu_detail").css("display","none")}),$(".nav_auto").on("mouseover","div",function(){"nav_left"==$(this).attr("class")&&$(".order").css("display","block")}),$(".nav_auto").on("mouseout","div",function(){"nav_left"==$(this).attr("class")&&$(".order").css("display","none")}),$(".order").on("mouseover","div",function(){$(".order").css("display","block")}),$(".order").on("mouseout","div",function(){$(".order").css("display","none")}),$(".order").hover(function(){$(this).addClass("current"),$(this).find("span").css("display","none"),$(".menu_detail").css("display","block")},function(){$(this).removeClass("current"),$(this).find("span").css("display","block"),$(".menu_detail").css("display","none")}),$(".goodsCateSubTitle").click(function(){$(this).parent().find(".goodsCateSub").toggle(),$(this).find("i").hasClass("active")?($(this).css("border-bottom","1px solid #ddd"),4==$(this).parents("li").index()&&$(this).css("border-bottom","none"),$(this).find(".arrow_down").removeClass("active")):($(this).find(".arrow_down").addClass("active"),$(this).css("border-bottom","none"))});var l=0,r=cookie.get("uid");!function(){function e(s){s?$(".nav_shop").hover(function(){$(".shop_cart").css("display","block"),s.length&&setTimeout(function(){$(".cart_Tip").css("display","none"),$(".cart_List").html('<div class="shop_tit">已加入购物车中的商品</div>');var t=document.createElement("div");t.className="shop_body",t.innerHTML=s.map(function(t){return'<div class="shop_list">\n\t\t\t\t\t\t\t\t\t<div class="shop_img fl">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;">\n\t\t\t\t\t\t\t\t\t\t\t<img src="'+t.imgurl+'" alt="'+t.name+'"/>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="shop_numb fl">\n\t\t\t\t\t\t\t\t\t\t<div class="ITopCartInc shop_jia ">+</div>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="ITopCartInput " value="'+t.num+'" base="1">\n\t\t\t\t\t\t\t\t\t\t<div class="ITopCartDec shop_jian">-</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<dl class="fr">\n\t\t\t\t\t\t\t\t\t\t<dt><a href="javascript:;">'+t.name+'</a></dt>\n\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t\t<span class="shop_price fl">¥ '+t.price+'</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="ITopCartGoodsRemove del fr">删除</span>\n\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t</div>'}).join(),$(".cart_List").append(t)},600)},function(){$(".cart_Tip").html("正在载入..."),$(".shop_cart").css("display","none")}):$(".nav_shop").hover(function(){$(".shop_cart").css("display","block"),setTimeout(function(){$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！")},600)},function(){$(".cart_Tip").html("正在载入..."),$(".shop_cart").css("display","none")})}if(cookie.get("nickname"))$.ajax({type:"get",url:"../api/cart.php",async:!0,data:{m:"cart",uid:r},success:function(t){var s=JSON.parse(t);s&&e(s.list)}});else if(cookie.get("id")){for(var t=cookie.get("num"),s=cookie.get("id").split(","),o=t.split(","),a=[],n=0;n<s.length;n++)l+=1*o[n];for(var i=function(i){$.ajax({type:"get",url:"../api/list.php",async:!0,data:{m:"detail",id:s[i]},success:function(t){for(var s=JSON.parse(t),n=0;n<s.length;n++)s[n].num=o[i],a.push(s[n]);e(a)}})},c=0;c<s.length;c++)i(c)}else $(".nav_shop").hover(function(){$(".shop_cart").css("display","block"),setTimeout(function(){$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！")},600)},function(){$(".cart_Tip").html("正在载入..."),$(".shop_cart").css("display","none")});$(".goodNum").html(l),$(".i_sbar_nub").html(l)}(),cookie.get("nickname")&&$.ajax({type:"get",url:"../api/cart.php",async:!0,data:{m:"cart",uid:r},success:function(t){var s=JSON.parse(t);if(s.code)for(var n=0;n<s.list.length;n++)l+=1*s.list[n].num,$(".goodNum").html(l),$(".i_sbar_nub").html(l)}}),$("#sider_returntop").click(function(){$("body,html").animate({scrollTop:0},100)})});