/**
 * Created by Allen1990 on 2016/6/22.
 */
define(["appModule"],function(app){
    app.register.service('homeService',['$http','$q',function($http,$q){
        var deferred = $q.defer();
        return {
            getAllUsers : function(params){
                console.log('进入 sevice');
                var params = params || {};
                $http({
                    method : params.method || 'post',
                    url : params.url || '',
                    data : params. data || {},
                    responseType : params.type || 'json'
                }).success(function(data){
                    console.log('sevice 返回成功');
                    deferred.resolve(data);
                }).error(function(reason){
                    console.log('sevice 返回失败');
                    deferred.reject(reason);
                });
                return deferred.promise;
            }
        };
    }]);
});