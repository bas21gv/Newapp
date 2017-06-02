angular.module('myapp.hotels')
.service('myService', [function(){
	this.message = "Happy Weekend";
	this.sayHello = function(){
		console.log("Inside service");
	}
}]);