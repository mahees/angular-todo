 angular.module('app')

 .controller('TodoController', ['$scope', 'TodoService', '$http', function($scope, TodoService, $http) {
     $scope.todos = TodoService.getAllTodos();

     $scope.remainingCount = function() {
         var counter = 0;
         for (var i = $scope.todos.length - 1; i >= 0; i--) {
             if (!$scope.todos[i].completed) {
                 counter++;
             }
         };
         return counter;
     };

     $scope.save = function(updatedTodo) {
        console.log(updatedTodo.id)
         TodoService.saveTodo(updatedTodo);
     };

     $scope.alertJoke = function() {
         $http({
             method: 'GET',
             url: '//api.icndb.com/jokes/random'
         }).then(function successCallback(response) {
             // this callback will be called asynchronously
             // when the response is available
             console.log(response)
             alert(response.data.value.joke)
         }, function errorCallback(response) {
             // called asynchronously if an error occurs
             // or server returns response with an error status.
         });
     };

 }]);