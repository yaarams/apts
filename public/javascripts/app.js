// Angular module, defining routes for the app
angular.module('polls', ['pollServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
        when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
        when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
        // If invalid route, just redirect to the main list view
        otherwise({ redirectTo: '/polls' });
}]);

angular.module('apts', ['aptServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/apts', { templateUrl: 'partials/apt/list.html', controller: AptListCtrl }).
        when('/apts/:aptId', { templateUrl: 'partials/apt/item.html', controller: AptItemCtrl }).
        //when('/new', { templateUrl: 'partials/apt/new.html', controller: AptNewCtrl }).
        // If invalid route, just redirect to the main list view
        otherwise({ redirectTo: '/apts' });
}]);