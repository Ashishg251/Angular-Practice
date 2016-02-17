var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Tony';
    
    $timeout(function(){
        $scope.name = 'EveryOne';
    },3000);
    
}]);
