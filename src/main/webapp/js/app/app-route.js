define(['appModule','require','angular-route'],function(app,require) {
    app.config(['$routeProvider','$controllerProvider', function ($routeProvider,$controllerProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templete/tplApp/home.html'
            })
            .when('/home', {
                templateUrl: 'templete/tplApp/home.html'
            })
            .when('/logistics', {
                templateUrl: 'logistics.html'
            })
            .when('/shoppingcar', {
                templateUrl: 'shoppingcar.html'
            })
            .when('/myCat', {
                templateUrl: 'myCat.html'
            })
            .when('/more', {
                templateUrl: 'more.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
});