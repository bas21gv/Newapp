angular.module('myapp.hotels')
.filter('design',[function(){
	return function(input){
		return "#####"+input+"#####";
	}
}])
.filter('rating',[function(){
	return function(input,udata){
		return input+"["+udata+"]";
	}
}]);