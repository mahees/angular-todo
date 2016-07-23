 angular.module('app')
     .controller('NewTodoCtrl', ['$scope', '$routeParams', 'TodoService', '$location', function($scope, $routeParams, TodoService, $location) {
         $scope.todo = {};

         $scope.newTodo = true;

         $scope.saveTodo = function() {
             TodoService.saveTodo($scope.todo);
             $location.path('/');
         }

     }]);