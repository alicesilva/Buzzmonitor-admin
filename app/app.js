'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('HomeCrtl', ['$scope', function ($scope) {
    $scope.functions = false;
    $scope.numberOfProjects = "";
    $scope.postsColletedPerMonth = "";
    $scope.trackesAnalyticsProfile = "";
    $scope.CRMProfiles = "";
    $scope.teste = 0;
    $scope.viewFunctions = function () {
        $scope.functions = true;
        console.log($scope.functions)
        console.log("Oi");
    }

    $scope.numPostsColletedPerMonth = 600000;

    $scope.consumoAtual = 200000
    $scope.porcentagem = Math.round(($scope.consumoAtual / $scope.numPostsColletedPerMonth) * 100)

    $scope.myStyle = {
        'width': $scope.porcentage
    }

    $scope.extracollects = 0;

    $scope.captions = ["a", "b", "c"]

    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: ""
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.atual}</b> of total<br/>'
        },

        "series": [
            {
                "name": "Consumer",
                "colorByPoint": true,
                "data": [
                    {
                        "name": "Brand 1",
                        "y": 10.67,
                        'atual': 10000
                    },
                    {
                        "name": "Brand 2",
                        "y": 6.67,
                        'atual': 400
                    },
                    {
                        "name": "Brand 3",
                        "y": 83.34,
                        'atual': 5000
                    },
                    {
                        "name": "Brand 4",
                        "y": 5.50,
                        'atual': 330
                    },
                    {
                        "name": "Brand 5",
                        "y": 5.00,
                        'atual': 300
                    },
                    {
                        "name": "Brand 6",
                        "y": 3.34,
                        'atual': 200
                    },
                    {
                        "name": "Brand 7",
                        "y": 1.67,
                        'atual': 100
                    },
                    {
                        "name": "Brand 8",
                        "y": 15.00,
                        'atual': 900
                    },
                    {
                        "name": "Brand 9",
                        "y": 13.34,
                        'atual': 800
                    },
                    {
                        "name": "Brand 10",
                        "y": 11.67,
                        'atual': 700
                    },
                    {
                        "name": "Brand 11",
                        "y": 5.00,
                        'atual': 300
                    },
                    {
                        "name": "Brand 12",
                        "y": 1.67,
                        'atual': 100
                    },
                    {
                        "name": "Brand 13",
                        "y": 3.34,
                        'atual': 200
                    },
                    {
                        "name": "Brand 14",
                        "y": 66.67,
                        'atual': 4000
                    },
                    {
                        "name": "Brand 15",
                        "y": 83.33,
                        'atual': 5000
                    },
                    {
                        "name": "Brand 16",
                        "y": 0,
                        'atual': 0
                    },
                    {
                        "name": "Brand 17",
                        "y": 33.34,
                        'atual': 2000
                    },
                    {
                        "name": "Brand 18",
                        "y": 50.00,
                        'atual': 3000
                    },
                    {
                        "name": "Brand 19",
                        "y": 66.67,
                        'atual': 4000
                    },
                    {
                        "name": "Brand 20",
                        "y": 83.33,
                        'atual': 5000
                    }

                ]
            }
        ]
    });

    $scope.brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7",
    "Brand 8", "Brand 9", "Brand 10", "Brand 11", "Brand 12", "Brand 13", "Brand 14", "Brand 15",
    "Brand 16", "Brand 17", "Brand 18", "Brand 19", "Brand 20"];
}]);
