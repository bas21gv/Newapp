angular.module('myapp.hotels')
.controller('hotelController',['$scope','hotelFactory',function($scope,hotelFactory){
    $scope.title="ChuckWagon";
    
    // service call
   // myService.sayHello();
    var promise = hotelFactory.getAllHotels();
    promise.then(function(result){
    	$scope.hotelList = result.data;
    },function(error){
    	console.log(error);
    });

   /* $scope.hotelList=[
    {
     name:"The Diner",
     location:"Adyar",
     cuisine:['Indian','Chinese'],
     city:"Chennai",
      description:"Good Food"    ,
      ratings:"4 star",
	},
    {
     name:"The Keys",
     location:"Adyar",
     cuisine:['Indian','Chinese'],
     city:"Bangalore",
      description:"Good Food"    ,
      ratings:"4 star",
    },
     {
          name:"Sangeetha",
     location:"Adyar",
     cuisine:['Indian','Chinese'],
     city:"Chennai",
      description:"Good Food"    ,
      ratings:"4 star",
    },
    {
          name:"Rajdhani",
     location:"Adyar",
     cuisine:['Indian','Chinese'],
     city:"Bangalore",
      description:"Good Food"    ,
      ratings:"4 star",
        }
    ]*/

    $scope.selectedHotel;
    $scope.showDetail = false;
    $scope.getHoteldetails = function(hotel){
    	$scope.selectedHotel = hotel;
    	$scope.showDetail = true;
    /*	for(var i=0;i<$scope.hotelList.length;i++){
    		if($scope.hotelList[i].city == hotel.city){
    			hotel.highlight = true;
    			console.log(hotel.highlight);
    		}
    	}*/
    }


    $scope.getHotelsByCity = function(city){
        for (var i = 0; i < $scope.hotelList.length; i++) {
            var hotel = $scope.hotelList[i];
            if(hotel.city == city){
                hotel.highlight=true;
            }
    	}
 	}
}]);
