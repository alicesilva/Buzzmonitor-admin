'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('HomeCrtl', ['$scope', function($scope){
  $scope.functions = false;
  $scope.viewFunctions = function(){
    $scope.functions = true;
    console.log($scope.functions)
    console.log("Oi");
  }
}]);
