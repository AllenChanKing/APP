define(['appModule'],function(app){
    app.controller('MobileAppCtrl', ['$scope', function($scope,$routeParams){
        $scope.appTabs=[
            {tabName:"首页",target:"#/home",tabClass:"icon icon-home",selectedClass:"icon icon-homeselected",isSelected:false},
            {tabName:'物流',target:'#/logistics',tabClass:'icon icon-logistics',selectedClass:'icon icon-logisticsselected',isSelected:false},
            {tabName:'购物车',target:'#/shoppingcar',tabClass:'icon icon-shoppingcar',selectedClass:'icon icon-shoppingcarselected',isSelected:false},
            {tabName:'我的猫',target:'#/myCat',tabClass:'icon icon-user',selectedClass:'icon icon-userselected',isSelected:false}
        ];

        $scope.changeTab=function(curtTab){
            angular.forEach($scope.appTabs,function(tab,i){
                tab.isSelected=false;
            });
            curtTab.isSelected=true;
        }

    }]);
});