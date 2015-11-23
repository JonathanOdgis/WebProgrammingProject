angular.module('jonathan.directives')
    .directive('mpPanel', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                title: '=',         
                body: '=',
                confirm: '&'
            },
            templateUrl: 'directives/panel.html'
            //link: function ($scope, element, attrs) { } //DOM manipulation
        }
    });