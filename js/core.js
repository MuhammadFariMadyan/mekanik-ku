app.controller('main_control',function($scope,$http){
			loaded_mekaniks();
			function loaded_mekaniks(){
					$http.get("https://mekanik-ku.herokuapp/load").success(function(data){
							$scope.loaded_mekaniks=data;
						})

				}

	});
