
define([], function(){
	var userList = [
		{name:'小明', age:20},
		{name:'小三', age:21}
	];

	return {
		getList(){
			return userList;
		}, 
		add(name, age){
			userList.push({name:name, age:age});
		},
		update(){

		},
		del(){

		}
	}
})