$(function () {
	var str = decodeURI(location.search);
	var keyword = str.split("?")[1];
	$("#keyword").click(function () {
		$(this).focus();
		$(this).val("");
	})
	var curNum=0;
	var num=0;
	function show(str,page) {
		var arr = JSON.parse(str);
			$(".pagination").html("");
			num = Math.ceil(arr.total/arr.qty);
			curNum=page;
			$(".product_total").html("共"+arr.total+"件商品");
			$(".product_page_current").html(curNum);
			$(".product_page_total").html(num);
			for(var i=num;i>0;i--){
				if(i==page){
					$(".pagination").prepend('<a href="javascript:;" title="转到第'+i+'页" class="active">'+i+'</a>')
				}else{
					$(".pagination").prepend('<a href="javascript:;" title="转到第'+i+'页">'+i+'</a>');
				}
			}
			$(".pagination").prepend('<a href="javascript:;" title="上一页" class="pre_page">   上一页< </a>')
			$(".pagination").append(`<a href="javascript:;" title="下一页" class="next_page">   下一页 > </a>
									<a href="javascript:;" title="末页" class="last_page">末页</a>
									<span class="total_page">共${num}页</span>
									<span>到第&nbsp;&nbsp;<input type="text" class="go_page_text"/>&nbsp;&nbsp;页</span>
									<input type="button" id="goPages" value="确定" class="go_page_button">`);
			if(curNum==1){
				$(".pagination .pre_page").remove();
			}
			if(curNum==num){
				$(".pagination .next_page").remove();
			}
			$(".go_page_button").on("click",function () {
				curNum=$(".go_page_text").val();
				if(curNum>=num||isNaN(curNum)){
					curNum=num;
					
				}
				data.page=curNum;
				pagelist(data);
			})
			$(".product_list").html(arr.list.map(function (item) {
				return `<li data-id="${item.id}">
							<div class="self-support"></div>
							<div class="product_list_container">
								<a href="javascript:;"><img src="${item.imgurl}" class="product_image"/></a>
								<p class="product_price">
									<strong>¥${item.price}</strong>
									<span class="price_unit" style="display: inline;"></span>
									<p class="product_price"></p>
								</p>
								<p class="product_name">
									<a href="javascript:;">${item.name}</a>
								</p>
								<p class="product_active"></p>
								<div class="product_status">
									<span class="product_status">
										已售${item.sold}
									</span>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<a href="javascript:;" class="product_comment">
										已有
										<em>${item.comment}</em>
										人评价
									</a>
								</div>
								<div class="operation">
									<div class="add_cart">
										<a href="javascript:;">
											<i class="icons icon_cart"></i>
											<span>加入购物车</span>
										</a>
									</div>
									<div class="do_attention">
										<a href="javascript:;">
											<i class="icons icon_fav"></i>
											<span>收藏</span>
										</a>
									</div>
								</div>
							</div>
						</li>`;
			}))
	}
	function pagelist(data) {
		$.ajax({
			type:"get",
			url:"../api/list.php",
			data:data,
			async:true,
			success:function (str) {
				show(str,data.page);
			}
		});
	}
	var data = {
		"m":"init",
		"page":1,
		"qty":20,
		"keyword":keyword
	}
	pagelist(data);
	$(".pagination").on("click","a",function () {
		if(!isNaN($(this).html()*1)){
			data.page=$(this).html();
			pagelist(data);
//			data.qty=20;
//			pagelist($(this).html(),20);
		}
		if($(this).attr("class")=="next_page"){
			curNum++;
			data.page=curNum;
			pagelist(data)
//			pagelist(curNum,20);
		}
		if($(this).attr("class")=="pre_page"){
			curNum--;
			data.page=curNum;
			pagelist(data)
//			
//			pagelist(curNum,20);
		}
		if($(this).attr("class")=="last_page"){
			curNum=num;
			data.page=curNum;
			pagelist(data)
		}
	})
	$(".sort_right_right").on("click","a",function () {
		if($(this).attr("class")=="prev_page"){
			curNum=--curNum>1?curNum:1;
			data.page=curNum;
			pagelist(data)
		};
		if($(this).attr("class")=="next_page"){
			curNum=++curNum>num?num:curNum;
			data.page=curNum;
			pagelist(data)
		};
	})
	$(".sort_left").on("click","a",function () {
		data.m=$(this).attr("class");
		data.page = 1;
		pagelist(data);
	})
	$(".product_list").on("click","li",function () {
		var str = $(this).attr("data-id");
		location.href = "../html/goods.html?"+str;
		
	})
})