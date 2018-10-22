'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('HomeCrtl', ['$scope', function ($scope) {
    $scope.functions = false;
    $scope.numberOfProjects = "";
    $scope.postsColletedPerMonth = "";
    $scope.trackesAnalyticsProfile = "";
    $scope.CRMProfiles = "";
    $scope.user = "alice.computacao.silva@gmail.com"

    $scope.numPostsColletedPerMonth = 6000;

    $scope.consumoAtual = 6000
    $scope.porcentagem = Math.round(($scope.consumoAtual / $scope.numPostsColletedPerMonth) * 100)

    $scope.extracollects = 0;


    $scope.data = [
        {
            name: "Brand 1",
            "y": 10.67,
            'atual': 1000,
            'paused': false
        },
        {
            name: "Brand 2",
            "y": 83.34,
            'atual': 5000,
            'paused': false
        },
        {
            name: "Brand 3",
            "y": 15.00,
            'atual': 900,
            'paused': false
        },
        {
            name: "Brand 4",
            "y": 13.34,
            'atual': 800,
            'paused': false
        },
        {
            name: "Brand 5",
            "y": 11.67,
            'atual': 700,
            'paused': false
        }

    ]
}]);
