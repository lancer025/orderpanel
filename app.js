var app=angular.module("orderPanel", []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/addOrder',{
		templateUrl: 'templates/addOrder.html',
		controller: 'addOrderController',
		data:'addOrderData'
	}).
	when('/showOrder/:orderID',{
		templateUrl: 'templates/showOrder.html',
		controller: 'showOrderController'
	}).
	otherwise({
		redirectTo: '/addOrder'
	});
}]);

app.controller('addOrderController', function($scope){
	$scope.message="this is new order";

	});
app.controller('showOrderController', function($scope, $routeParams){
	$scope.message="these are all of the orders";
	$scope.order_id=$routeParams.orderID
});


