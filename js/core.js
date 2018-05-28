const port = process.env.PORT || 3500;
app.controller('main_control',function($scope,$http){
			loaded_mekaniks();
			function loaded_mekaniks(){					
					$http.get(`http://mekanik-ku.herokuapp.com:${port}/load`).success(function(data){
							$scope.loaded_mekaniks=data;
						})

				}

	});
