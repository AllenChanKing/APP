/**
 * Created by Allen1990 on 2016/6/22.
 */
define(["appModule"],function(app){
    app.register.service('homeService',['$http','$q',function($http,$q){
        var deferred = $q.defer();
        return {
            getAllUsers : function(params){
                var params = params || {};
                $http({
                    method : params.method || 'post',
                    url : params.url || '',
                    data : params. data || {},
                    responseType : params.type || 'json'
                }).success(function(data){
                    deferred.resolve(data);
                }).error(function(reason){
                    deferred.reject(reason);
                });
                return deferred.promise;
            }
        };
    }]);
});