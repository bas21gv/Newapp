angular.module('myapp.hotels')
.factory('hotelFactory', ['$http',function($http){
	var _getAll = function(){
		return $http.get('data/hotels.json');
	}
	return {
		getAllHotels: _getAll
	}
}]);