app.controller('twoController',['$rootScope','$scope','central',function($scope,$rootScope,central){

	$scope.field = 'bye!!';

	$rootScope.$on("change",function(){
		alert($rootScope.ok);
    });

    $scope.hi2 = function(){
		//alert('dfgsdf');
		//alert($rootScope.ok);
		alert($scope.field);
	};
}]);