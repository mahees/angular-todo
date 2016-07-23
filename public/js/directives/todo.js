 angular.module('app')

 .directive('todo', function() {
     return {
         restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
         scope: {
             //@ reads the attribute value, = provides two-way binding, & works with functions
             model: '=',
             id: '@',
             change: '&'
         },
         template: '<input type="checkbox" ng-change="change(model)" ng-model="model.completed"><a href="#/{{id}}">{{model.name}}</a>',
         link: function($scope, element, attrs) {
             element.bind('mouseenter', function() {
                 element.css('background-color', 'yellow');
             });
             element.bind('mouseleave', function() {
                 element.css('background-color', 'white');
             });
         }
     }
 });