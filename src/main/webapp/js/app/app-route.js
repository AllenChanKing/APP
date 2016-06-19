define(['appModule','require','angular-route'],function(app,require) {
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $compileProvider.register,
            service: $provide.service
        };
    });
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templete/tplApp/home.html',
                controller:'homeCtrl',
                resolve: {
                    loadCtrl: ["$q", function($q) {
                        var deferred = $q.defer();
                        require(['homeCtr1'], function() {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when('/home', {
                templateUrl: 'templete/tplApp/home.html',
                controller:'homeCtrl',
                resolve: {
                    loadCtrl: ["$q", function($q) {
                        var deferred = $q.defer();
                        require(['homeCtrl'], function() {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
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