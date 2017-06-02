angular.module('myapp.hotels')
.directive("greetMsg",[function(){
	return {
		restrict: 'EA',
		template: 'Hotel Application'
	}
}])

.directive("hotelDetails",[function(){
	return {
		restrict: 'EA',
		templateUrl:'app/hotelapp/partials/hotelDetails.html',
		scope:{
			title: '@',
			showHotel: '=',
			viewByCity: '&'
		},
		link:function(scope,el,attr,ctrl){
			scope.posReviews = function(){
				console.log("positive");
			}
			scope.negReviews = function(){
				console.log("negative");
			}
		}
	}
}])