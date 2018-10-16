'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('HomeCrtl', ['$scope', function($scope){
  $scope.functions = false;
  $scope.numberOfProjects = "";
  $scope.postsColletedPerMonth = "";
  $scope.trackesAnalyticsProfile = "";
  $scope.CRMProfiles = "";
  $scope.viewFunctions = function(){
    $scope.functions = true;
    console.log($scope.functions)
    console.log("Oi");
  }

  $scope.numPostsColletedPerMonth = 600000;

  $scope.consumoAtual = 200000
  $scope.porcentagem = Math.round(($scope.consumoAtual / $scope.numPostsColletedPerMonth) * 100)

  $scope.myStyle = {
    'width':  $scope.porcentage
  }
  
}]);
