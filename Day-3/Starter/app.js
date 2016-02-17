var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log) {
    
    $log.log("Hi, this is a normal log message");
    $log.info("Hi, this is a informative message");
    $log.debug("Hi, this is a debug message");
    $log.error("Hi, this is an error message");
    $log.warn("Hi, this is a warning message");
});