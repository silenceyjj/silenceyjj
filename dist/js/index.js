"use strict";$(function(){function t(t,n){$(t).hover(function(){$(n).css("display","block"),$(t).addClass("current")},function(){$(n).css("display","none"),$(t).removeClass("current")})}function n(t,n){$.ajax({type:"get",url:"api/list.php",async:!0,data:t,success:function(t){n(t)}})}$(".buy_tips_close").click(function(){$("#buy_tips").css("display","none")}),$(".city").hover(function(){$(".city").addClass("cur"),$(".city_l p").addClass("up"),$(".cityList").css("display","block")},function(){$(".city").removeClass("cur"),$(".city_l p").removeClass("up"),$(".cityList").css("display","none")}),$.ajax({type:"get",url:"api/city.php",async:!0,success:function(t){for(var n=JSON.parse(t),e=document.querySelector(".cityList"),s=0;s<n.length;s++){var a=document.createElement("dl");a.innerHTML="<dt>"+n[s].region+"：</dt>";var i=document.createElement("dd");i.innerHTML=n[s].allcity.map(function(t){return"<a href='###;' id='p_"+t.id+"'>"+t.city+"</a>"}).join(""),a.appendChild(i),e.appendChild(a)}}}),$(".cityList").on("click","a",function(){$("a").removeClass("now"),$(this).addClass("now"),$("#cityInfo").html($(this).html())}),t(".tel",".tel_select"),t(".focus",".focus_select"),t(".menu",".menu_select"),$(".nav_main a:gt(0)").hover(function(){$(this).addClass("current")},function(){$(this).removeClass("current")}),$(".nav_shop").hover(function(){$(".shop_cart").css("display","block");setTimeout(function(){$(".cart_Tip").html("购物车还是空的，赶紧给爱宠挑点什么吧！")},600)},function(){$(".cart_Tip").html("正在载入..."),$(".shop_cart").css("display","none")}),$(".shop_menu").hover(function(){$(this).addClass("current"),$(this).find("span").css("display","none"),$(".menu_detail").css("display","block")},function(){$(this).removeClass("current"),$(this).find("span").css("display","block"),$(".menu_detail").css("display","none")});function e(t){$.ajax({type:"get",url:"api/list.php",async:!0,data:{m:"goodlist",keyword:t},success:function(t){var n,e,s;n=t,e=JSON.parse(n),(s=document.createElement("div")).className="dog_c_t","狗粮"==e[0].keyword||$(".dog_c_t").css("display","none"),s.innerHTML=e.map(function(t){return'<dl class="dog_c_t_1">\n\t\t\t\t\t\t\t\t\t\t\t<dt><a href="javascript:;"><img src="'+t.imgurl+'" title="'+t.name+'"/></a></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><a href="javascript:;" title="'+t.name+'">'+t.name+'</a></dd>\n\t\t\t\t\t\t\t\t\t\t\t<dd><span class="l">¥ '+t.sold+'</span><span class="r">已售'+t.price+"</span></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>"}).join(""),$(".dog_body").append(s)}})}e("狗粮"),e("湿粮"),e("零食"),e("保健品"),e("医疗"),e("沐浴露"),e("日用品"),e("美容"),e("玩具"),e("衣服窝"),n({m:"lunbo"},function(t){var n=JSON.parse(t);$(".banner .swiper-wrapper").html(n.map(function(t){return'<a href="javascript:;" class="swiper-slide"><img src="'+t.bannerimg+'"/></a>'}));var e=new Swiper(".banner .swiper-container",{autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,speed:500,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,n){return'<span class="'+n+'">'+(t+1)+"</span>"}}}),s=document.getElementById("swiper-container");s.onmouseover=function(){e.autoplay.stop()},s.onmouseout=function(){e.autoplay.start()},new Swiper("#zx .swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),n({m:"hotimg"},function(t){for(var n=JSON.parse(t),e=Math.ceil(n.length/6),s=0;s<e;s++){var a=document.createElement("div");a.className="hot_pro_b_con";for(var i=6*s;i<6*(s+1);i++){var c=document.createElement("dl");c.innerHTML='<dt>\n\t\t\t\t\t\t\t\t\t<a href="javascript:;"><img src="'+n[i].hotimg+'" title="'+n[i].name+'"/></a>\n\t\t\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t\t\t<dd><a href="javascript:;" title="'+n[i].name+'">'+n[i].name+'</a></dd>\n\t\t\t\t\t\t\t\t<dd><span class="l">¥ '+n[i].price+'</span><span class="r">已售'+n[i].price+"</span></dd>",a.appendChild(c)}$(".hot_pro_b").append(a),0<s&&$(".hot_pro_b_con").eq(s).css("display","none")}});var s=0;$("#change_pro").click(function(){2<++s&&(s=0),$(".hot_pro_b_con").css("display","none"),$(".hot_pro_b_con").eq(s).css("display","block")}),$(".dog_nav").find("a").hover(function(){$(this).parents(".dog_top").next().find(".dog_c_t").css("display","none"),$(this).parents(".dog_top").next().find(".dog_c_t").eq($(this).index()).css("display","block")}),$(".menu_body").on("click","a",function(){var t=$(this).html();location.href="html/list.html?"+t})});