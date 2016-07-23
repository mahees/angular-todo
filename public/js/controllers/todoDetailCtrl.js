 angular.module('app')



 .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'TodoService', '$location', function($scope, $routeParams, TodoService, $location) {
     $scope.todo = TodoService.getTodo($routeParams.id);

     $scope.saveTodo = function() {
         TodoService.saveTodo($scope.todo);
         $location.path('/');
     }
 }]);