app.directive('directiveHtml', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/directive.html'
    };
});