app.controller('main_control',function($scope,$http){
			loaded_mekaniks();
			function loaded_mekaniks(){
					$http.get("https://localhost:5432/load").success(function(data){
							$scope.loaded_mekaniks=data;
						})

				}

	});
