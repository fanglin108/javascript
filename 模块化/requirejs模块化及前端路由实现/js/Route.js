
// 路由解析文件，通常由框架作者编写，比如VUE中路由
define([], function(){
	function Route(options){
		this.routesConfig = options.routes;
		this.init();
	}

	Route.prototype = {
		constructor:Route,
		init(){
			console.log('init');
			var _that = this;
			window.addEventListener("hashchange", function(){
				var hash = location.hash.substring(1);

				var curRoute = _that.routesConfig.find(item=>{
					return item.path == hash;
				});

				if (curRoute) {
					curRoute.component();
				}

			})
		},

		push({path}) {
			var curRoute = this.routesConfig.find(item=>{
				return item.path == path;
			})

			if (curRoute) {
				curRoute.component();
			}
		}
	}

	return Route;	
})