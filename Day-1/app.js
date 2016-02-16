// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    var Person = function(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    };
    
    function logPerson(People){
        
        console.log(People);
    }
    
    var john = new Person("John","Doe");
    logPerson(john);
}]);



