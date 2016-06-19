define(['appModule','require','angular-route'],function(app,require) {
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            //�õ�$controllerProvider������
            controller : $controllerProvider.register,
            //ͬ���ģ�����Ҳ���Ա���directive��filter��service������
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