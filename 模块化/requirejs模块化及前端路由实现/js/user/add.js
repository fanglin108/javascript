
// 使用require解决循环依赖问题
define(["jquery", "service/userService", "require", "user/index"], function($, userService, require){

	return function(){
		var addStr = `
			<form action="">
			<div>
				name: <input type="text" name="name" />
				age: <input type="text" name="age" />
				<button type="submit">提交</button>
			</div>
			</form>
		`;

		var $addStr = $(addStr);

		$addStr.on("click", "button", function(e){
			e.preventDefault();
			var name = $("input[name='name']").val();
			var age = $("input[name='age']").val();
			userService.add(name, age);

			// 此处通过require调用user/index模块。
			// 由于user/index中调用了user/add，此处如果引入user/index进行传参调用会导致循环依赖从而报错
			require("user/index")();

			// userIndex(); //报错：userIndex is not a function，由于循环依赖导致
		})

		$(".right").html($addStr);
	}
})