var app = angular.module("app",[]);

app.service('central',['$rootScope',function($rootScope){
	$rootScope.ok = '';
}]);

app.controller('oneController',['$rootScope','$scope','central',function($rootScope,$scope,central){

	$scope.field = 'one';

	$scope.change = function(){
		$rootScope.ok = $scope.field;
		$rootScope.$emit('changeOne');
	};

	$rootScope.$on("changeTwo",function(){
		$scope.field = $rootScope.ok;
	});

}]);

app.controller('twoController',['$rootScope','$scope','central',function($rootScope,$scope,central){

	$scope.field = 'two';

	$scope.change = function(){
		$rootScope.ok = $scope.field;
		$rootScope.$emit('changeTwo');
	};

	$rootScope.$on("changeOne",function(){
		$scope.field = $rootScope.ok;
	});
}]);