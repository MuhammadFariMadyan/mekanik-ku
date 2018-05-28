app.controller('main_control',function($scope,$http){
			loaded_mekaniks();
			function loaded_mekaniks(){
					$http.get("http://localhost:3500/load").success(function(data){
							$scope.loaded_mekaniks=data;
						})

				}

	});
