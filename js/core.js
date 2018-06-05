app.controller('main_control',function($scope,$http){
			loaded_mekaniks();
			function loaded_mekaniks(){
				// $http.get("https://mekanik-ku.herokuapp.com/load").success(function(data){
					// $http.get("http://localhost:5432/load").success(function(data){
						$http.get("http://127.0.0.1:3000/load").success(function(data){
							$scope.loaded_mekaniks=data;
						})
				}
	});
