
// 路由配置文件 - 由开发者自己编写
define(['Route', 'user/index', 'user/add'], function(Route, userIndex, userAdd){
	var Route = new Route({
		routes:[
			{path:'user/index', component:userIndex},
			{path:'user/add', component:userAdd}
		]
	});

	return Route;
})