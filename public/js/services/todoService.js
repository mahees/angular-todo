angular.module('app')

.factory('TodoService', function(localStorageService) {

    var svc = {};

    svc.getAllTodos = function() {
        var todos = localStorageService.get('todos');
        if (todos) {
            return todos;
        }
        svc.seedTodos();
        return svc.getAllTodos();
    };

    svc.getTodo = function(id) {
        var todos = localStorageService.get('todos');
        for (var i = todos.length - 1; i >= 0; i--) {
            if (todos[i].id == id) {
                return todos[i];
            }
        };
        return null;
    };

    svc.saveTodo = function(todo) {
        var todos = localStorageService.get('todos') || [];
        if (todo.id) {
            //update
            for (var i = todos.length - 1; i >= 0; i--) {
                if (todos[i].id == todo.id) {
                    todos[i] = todo;
                    break;
                }
            }
        } else {
            todo.id = todos.length;
            todos.push(todo);
        }
        localStorageService.set('todos', todos);

    };

    svc.seedTodos = function() {
        var todoSeed = [{
            name: 'AngularJS Directives',
            completed: true,
            note: 'add notes...'
        }, {
            name: 'Data binding',
            completed: true,
            note: 'add notes...'
        }, {
            name: '$scope',
            completed: true,
            note: 'add notes...'
        }, {
            name: 'Controllers and Modules',
            completed: true,
            note: 'add notes...'
        }, {
            name: 'Templates and routes',
            completed: true,
            note: 'add notes...'
        }, {
            name: 'Filters and Services',
            completed: false,
            note: 'add notes...'
        }, {
            name: 'Get started with Node/ExpressJS',
            completed: false,
            note: 'add notes...'
        }, {
            name: 'Setup MongoDB database',
            completed: false,
            note: 'add notes...'
        }, {
            name: 'Be awesome!',
            completed: false,
            note: 'add notes...'
        }];

        for (var i = todoSeed.length - 1; i >= 0; i--) {
            svc.saveTodo(todoSeed[i]);
        };
    };

    return svc;
});