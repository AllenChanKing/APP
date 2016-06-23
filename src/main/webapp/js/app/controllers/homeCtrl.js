define(['appModule','homeService'],function(app){
    app.register.controller('homeCtrl', function($scope,homeService,$routeParams){
        $scope.getAllUsers=function(){
            var params={
                method : 'get',
                url : '/app/users/list1',
                data : {},
                responseType :'json'
            };

            homeService.getAllUsers(params).then(function(data){
                console.log('-->'+angular.toJson(data));
            },function(error){
                console.log('返回异常');
            });
        }

    });
});
