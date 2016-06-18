requirejs.config({
    baseUrl: 'lib',
    paths: {
        'require':'require',
        'jquery': 'jquery-1.8.1.min',
        'angular':'angular',
        'angular-route':'angular-route',
        'customjqueryplugins': '../js/utils/customjqueryplugins',
        'flexiable': '../js/public/flexiable',
        'app-route':'../js/app/app-route',
        'appModule':'../js/public/appModule',
        'mobileAppCtrl':'../js/app/controllers/mobileAppCtrl',
        'homeCtrl':'../js/app/controllers/homeCtrl'
    },
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-route":{
            deps: ['angular'],
            exports:"angular-route"
        }
    }
});

requirejs(['angular','flexiable','app-route','mobileAppCtrl','homeCtrl'], function(angular){
    angular.bootstrap(document,['MobileApp']);
});
