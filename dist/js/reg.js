"use strict";$(function(){var s,e,a,i;$(".headerbar-right").on("mouseover","li",function(){"head-weibo"!=$(this).attr("class")&&"head-wechat"!=$(this).attr("class")&&"head-phone"!=$(this).attr("class")||($(this).addClass("current"),$(this).find("div").css("display","block"))}),$(".headerbar-right").on("mouseout","li",function(){$(this).find("div").css("display","none"),$(this).removeClass("current")});var n=[!1,!1,!1,!1,!1];function r(e,a,s){return a.trim()&&(s=!!e),s}function t(e,a,s,i,n){$(e).css("display","block"),$(e).html(""),$(e).removeClass("suc err"),a.trim()?s?$(e).addClass("suc"):($(e).addClass("err"),$(e).html(i)):($(e).addClass("err"),$(e).html(n))}$("#mobile").blur(function(){s=$("#mobile").val(),n[0]=r(checkReg.tel(s),s,n[0]),$.ajax({type:"get",url:"../api/01.reg&login.php",data:{m:"index",a:"verifyMobilePhone",mobileNum:s},success:function(e){var a=JSON.parse(e);if(a.code)$("#mobile_tip").css("display","block"),$("#mobile_tip").removeClass("suc err"),$("#mobile_tip").addClass("err"),$("#mobile_tip").html(a.message),n[0]=!1;else{t("#mobile_tip",s,n[0],"请输入正确的手机号码！","请输入手机号码")}}})}),$("#password").blur(function(){e=$("#password").val(),n[1]=r(checkReg.psweasy(e),e,n[1]);t("#password_tip",e,n[1],"请输入正确的密码格式！","请输入密码！")}),$("#repassword").blur(function(){a=$("#repassword").val(),n[2]=r(checkReg.pswagain(e,a),a,n[2]);t("#repassword_tip",a,n[2],"您输入的两次密码不一致！","请再次输入密码！")}),$("#nickname").blur(function(){i=$("#nickname").val(),n[3]=r(checkReg.nickname(i),i,n[3]),$.ajax({type:"get",url:"../api/01.reg&login.php",data:{m:"index",a:"verifyNickName",nickname:i},success:function(e){var a=JSON.parse(e);if(a.code)$("#nickname_tip").css("display","block"),$("#nickname_tip").removeClass("suc err"),$("#nickname_tip").addClass("err"),$("#nickname_tip").html(a.message),n[3]=!1;else{t("#nickname_tip",i,n[3],"请输入正确的昵称格式","请输入昵称！"),n[3]||(i.length<2&&0<i.length?($("#nickname_tip").addClass("err"),$("#nickname_tip").html("用户昵称不能小于2位！")):10<i.length&&($("#nickname_tip").addClass("err"),$("#nickname_tip").html("用户昵称不能大于10位！")))}}})});var o=randomCode();function c(){for(var e=(o=randomCode()).split(""),a=0;a<e.length;a++){$("#yzm-code span").eq(a).html(e[a]),$("#yzm-code span").eq(a).css("color",randomColor(16));var s="rotate("+(randomNum(-45,45)+"deg")+")";$("#yzm-code span").eq(a).css("transform",s)}$("#yzm-code").css("text-decoration-color",randomColor(16))}c(),$("#change").on("click",function(){c()}),$("#reg-yzm").blur(function(){var e=$("#reg-yzm").val();$("#yzm_tip").css("display","block"),$("#yzm_tip").removeClass("suc yzmerr"),o.toLowerCase()==e?($("#yzm_tip").addClass("suc"),n[4]=!0):($("#yzm_tip").addClass("yzmerr"),n[4]=!1)}),$("#reg").on("click",function(){n[4]||c(),$("#login-box").prop("checked")&&n.indexOf(!1)<0&&$.ajax({type:"post",url:"../api/01.reg&login.php",data:{m:"index",a:"reg",mobileNum:s,password:e,nickname:i},success:function(e){if(!JSON.parse(e).code){setInterval(function(){location.href="../html/main.html"})}}})})});