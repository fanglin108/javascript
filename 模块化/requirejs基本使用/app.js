require.config({
    baseUrl:"js",
    paths:{
        "jquery":"lib/jquery.min"
    }
});
 
require(["jquery", "user/index", 'product/index'], function($, userIndex, productIndex){
    console.log("首页");
    userIndex();
    productIndex();

    
});