 angular.module('app', ['ngRoute', 'LocalStorageModule'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'views/todos.html',
             controller: 'TodoController'
         })

     .when('/new', {
         templateUrl: 'views/todoDetails.html',
         controller: 'NewTodoCtrl'
     })

     .when('/:id', {
         templateUrl: 'views/todoDetails.html',
         controller: 'TodoDetailCtrl'
     });
 }]);