"use strict";$(function(){cookie.get("nickname")?$(".login_tips").css("display","none"):$(".login_tips").css("display","block"),$(".login_out").click(function(){$(".login_tips").css("display","block")});var h=null;function k(t){var c=(1*t.val()*(1*t.parents("li").find(".cart_column_04 .product_price").html())).toFixed(2);t.parents("li").find(".product_jiage").html(c)}var a=[];function o(){a=[];for(var t=0;t<$(".check_btn").size();t++)$(".check_btn").eq(t).prop("checked")&&a.push(t);var c=0,e=0;for(t=0;t<a.length;t++)c+=1*$(".product_nums").eq(a[t]).val(),e+=1*$(".product_jiage").eq(a[t]).html();$(".item_sum").html(c),$(".product_sum").html("¥"+e.toFixed(2)),$(".s_money").html("总价= 商品总价:&nbsp;¥"+e.toFixed(2)+"\n\t\t\t\t    +\n                 \t全球购商品税费:&nbsp;¥0.00")}function s(r){var t=JSON.parse(r);t.code?($("#wrap2").css("display","block"),$(".cart_footer").css("display","block"),$(".cart_goodslist").html(t.list.map(function(t){return'<li id="'+t.id+'" class="clearfix">\n\t\t\t\t\t\t\t<div class="cart_column_01">\n\t\t\t\t\t\t\t\t<input type="checkbox"  class="check_btn" checked="checked"/>\n\t\t\t\t\t\t\t\t<a href="###">\n\t\t\t\t\t\t\t\t\t<img src="'+t.imgurl+'" class="product_img"/>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_02">\n\t\t\t\t\t\t\t\t<a href="###" class="product_name">\n\t\t\t\t\t\t\t\t\t'+t.name+'\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p class="product_spec">\n\t\t\t\t\t\t\t\t\t规格: \n           \t\t\t\t\t\t\t柯基,塑料扇\n           \t\t\t\t\t\t\t<span class="tags">品牌直送</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_03">\n\t\t\t\t\t\t\t\t<span class="weight">0.20kg</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_04">\n\t\t\t\t\t\t\t\t<span class="product_price">'+t.price+'</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_05">\n\t\t\t\t\t\t\t\t<span style="text-indent:-99999px;">&nbsp;</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_06">\n\t\t\t\t\t\t\t\t<div class="product_price_modify clearfix">\n\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="IDecNum decrease">-</a>\n\t\t\t\t\t\t\t\t\t<input type="text" value="'+t.num+'" class="IGoodsNum product_nums">\n\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="IIncNum increase">+</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_07">\n\t\t\t\t\t\t\t\t<p class="product_Total">\n\t\t\t\t\t\t\t\t\t<strong class="product_jiage">10.90</strong>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cart_column_08">\n\t\t\t\t\t\t\t\t<a href="###" class="IAddFavorites product_operation">移入收藏</a>\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="ICartRemove product_operation delete_shopcart">删除</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>'}))):($("#wrap").css("display","block"),$("#wrap2").css("display","none"),$(".cart_footer").css("display","none"));for(var c=0;c<$(".cart_goodslist li").size();c++){k($(".product_nums").eq(c))}var p={m:"change"};function d(){$(".mask").css("display","none"),$(".IAlertDialog").css("display","none")}function u(){$(".mask").css("display","block"),$(".mask").css("opacity","0.3"),$(".IAlertDialog").css("display","block")}function s(t,c,e){if(99<e?(e=99,u(),$(".IDialogText").html("<span>购物车最大商品数量不能超过99件</span>")):e<1?(e=1,u(),$(".IDialogText").html("<span>最少购买一件</span>")):isNaN(e)&&(e=1,u(),$(".IDialogText").html("<span>商品数量设置失败</span>")),t.val(e),cookie.get("nickname"))p.id=c,p.num=e,p.uid=cookie.get("uid"),l=p,$.ajax({type:"get",url:"../api/cart.php",async:!0,data:l,success:function(t){null!=h&&k(h)}});else{var s=cookie.get("id"),n=cookie.get("num"),i=s.split(","),a=n.split(","),o=a[i.indexOf(c)];o=1*e,a[i.indexOf(c)]=String(o),r=a.join(","),cookie.set("num",r,"")}var l;setTimeout(function(){d()},3e3)}function e(t){var c,e="",s="";if(cookie.get("nickname"))p.id=t,p.m="delete";else if(cookie.get("id")){var n=cookie.get("id").split(","),i=cookie.get("num").split(",");i.splice(n.indexOf(t),1);var a=n.splice(n.indexOf(t),1);e=n.join(","),s=i.join(","),console.log(e,s),cookie.set("id",e,""),cookie.set("num",s,""),l(),p.id=a,p.m="delete"}c=p,$.ajax({type:"get",url:"../api/cart.php",async:!0,data:c,success:function(t){l(),null!=h&&k(h)}}),o()}function n(t){t.prop("checked")?(t.prop("checked","checked"),$(".check_btn").prop("checked","checked")):(t.removeAttr("checked"),$(".check_btn").removeAttr("checked"))}function i(){a.length<$(".check_btn").size()&&($("#allchecked1").removeAttr("checked"),$("#allchecked2").removeAttr("checked")),a.length==$(".check_btn").size()&&($("#allchecked1").prop("checked","checked"),$("#allchecked2").prop("checked","checked"))}o(),i(),$(".IDialogClose").click(function(){d()}),$(".product_nums").blur(function(){var t=1*$(this).val(),c=$(this).parents("li").attr("id");s($(this),c,t),h=$(this),o()}),$(".product_price_modify").on("click","a",function(){var t=$(this).siblings(".product_nums").val();$(this).hasClass("increase")?t++:$(this).hasClass("decrease")&&t--;var c=$(this).parents("li").attr("id"),e=$(this).siblings(".product_nums");s(e,c,t),k(e),o()}),$(".delete_shopcart").click(function(){e($(this).parents("li").attr("id"))}),$(".delete_shopcarts").click(function(){for(var t=$(".cart_goodslist li").size(),c=0;c<t;c++){if($(".check_btn").eq(c).prop("checked"))e($(".check_btn").eq(c).parents("li").attr("id"))}}),$("#allchecked1").on("click",function(){n($(this)),o(),i()}),$("#allchecked2").on("click",function(){n($(this)),o(),$("#allchecked2").prop("checked")?$("#allchecked1").prop("checked","checked"):$("#allchecked1").removeAttr("checked")}),$(".cart_goodslist").on("click",".check_btn",function(){o(),i()})}function l(){if(cookie.get("nickname")){var t=cookie.get("uid");$.ajax({type:"get",url:"../api/cart.php",async:!0,data:{m:"cart",uid:t},success:function(t){s(t)}})}else if(cookie.get("id")){var c=cookie.get("id").split(","),e=cookie.get("num").split(",");$.ajax({type:"get",url:"../api/list.php",async:!0,data:{m:"nologin",idarr:c,numarr:e},success:function(t){s(t)}})}else $("#wrap").css("display","block"),$("#wrap2").css("display","none"),$(".cart_footer").css("display","none")}$(".login_out").click(function(){$.ajax({type:"post",url:"../api/01.reg&login.php",data:{m:"index",a:"logout"},success:function(t){JSON.parse(t).code||($(".none").css("display","block"),$(".login").css("display","none"),l())}})}),l()});