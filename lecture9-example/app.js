(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject=['$scope','$filter']; //for minification
function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  // console.log($injector.annotate(DIController));
}

// function AnnotateMe(name,job,blah){
//   return "Blah!";
// }

//console.log(DIController.toString());

})();
