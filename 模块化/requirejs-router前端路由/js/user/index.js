
define(["jquery", 'service/userService', 'user/add'], function($, userService, userAdd){
	return function(){
		console.log("user-index");
		var userList = userService.getList();

		var indexStr = `
			<div>
			<div>操作：<button class="add">添加</button></div>
			<table border="2" cellpadding="20">
				<tr><td>姓名</td><td>年龄</td><td>编辑</td></tr>
				${userList.map(item=>{
					return `<tr><td>${item.name}</td><td>${item.age}</td><td><button>编辑</button></td></tr>`;
				}).join("")}

			</table>
			</div>`;

		var $indexStr = $(indexStr);

		$indexStr.on("click", ".add", function(){
			userAdd();
		})

		$("#main .right").html($indexStr);
	}
})