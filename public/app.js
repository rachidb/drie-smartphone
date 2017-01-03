'use strict';
var app = angular.module("App", ['ngRoute']);
app.config(function($routeProvider) {
        // Integrer la session
        $routeProvider.otherwise({
                redirectTo: "/"
            })
    });
    