requirejs.config({
    paths : {
        //新名字：旧名字
        //所有依赖
         "jquery": "../lib/jquery-1.10.1.min",
         "swiper":"../lib/swiper",
         "base": "base",
         "cart": "cart",
         "common": "common",
         "goods": "goods",
         "index": "index",
         "list": "list",
         "login": "login",
         "reg": "reg",
    },
    // 设置依赖关系
	shim:{
		'base':{
			deps: ["jquery"]
		},
		'cart':{
			deps: ["jquery"]
		},
		'common':{
			deps: ["jquery"]
		},
		'goods':{
			deps: ["jquery"]
		},
		'index':{
			deps: ["jquery"]
		},
		'list':{
			deps: ["jquery"]
		},
		'login':{
			deps: ["jquery"]
		},
		'reg':{
			deps: ["jquery"]
		},
		
		'base':{
			deps: ["common"]
		},
		'cart':{
			deps: ["common"]
		},
		'goods':{
			deps: ["common"]
		},
		'index':{
			deps: ["common"]
		},
		'list':{
			deps: ["common"]
		},
		'login':{
			deps: ["common"]
		},
		'reg':{
			deps: ["common"]
		}
    }
});

//main.js-----
//requirejs(['jquery','swiper','base','cart','goods',],function($){
//  //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
//  //当moduleA，moduleB，moduleC模块都加载才能开发这里的功能
//  //但不保证以上模块的加载顺序
//  
//  //新功能：需要用到子模块：list和now
//  
//  
//});
