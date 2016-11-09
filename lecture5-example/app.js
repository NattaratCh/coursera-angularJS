(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Ning";
  $scope.sayHello = function () {
    return "Hello Coursera!!";
  }
});

})();
