require.config({
	// paths中路径基于此处baseUrl的配置
    baseUrl:"js",
    paths:{
    	// 文件夹
    	"service":"../service",
    	// 文件
        "jquery":"lib/jquery.min",

    }
});


require(["jquery", "routeConfig", "user/index"], function($, routeConfig, userIndex){
	// 采用委托绑定模式，减小内存开销
	$("#main").on("click", "li", function(){
		if ($(this).hasClass("user-manage")) {
			//userIndex();
			routeConfig.push({path:'user/index'});
		} else if ($(this).hasClass("product-manage")) {
			alert('product manage');
		}
	})

	// 触发被选元素的指定事件
	$(".left-menu li:eq(0)").trigger("click");
})