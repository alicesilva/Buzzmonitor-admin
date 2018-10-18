'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('HomeCrtl', ['$scope', function($scope){
  $scope.functions = false;
  $scope.numberOfProjects = "";
  $scope.postsColletedPerMonth = "";
  $scope.trackesAnalyticsProfile = "";
  $scope.CRMProfiles = "";
  $scope.teste = 0;
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

  $scope.extracollects = 0;

  $scope.captions = ["a", "b", "c"]
  
  Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Browser market shares. January, 2018'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
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
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Chrome",
                    "y": 62.74
                },
                {
                    "name": "Firefox",
                    "y": 10.57
                },
                {
                    "name": "Internet Explorer",
                    "y": 7.23
                },
                {
                    "name": "Safari",
                    "y": 5.58
                },
                {
                    "name": "Edge",
                    "y": 4.02
                },
                {
                    "name": "Opera",
                    "y": 1.92
                },
                {
                    "name": "Other",
                    "y": 7.62
                },
                {
                  "name": "Other4",
                  "y": 7.62
              },
              {
                "name": "Othe3",
                "y": 7.62
            },
            {
              "name": "Other2",
              "y": 7.62
          },
          {
            "name": "Other1",
            "y": 7.62
        },
        {
          "name": "Other11",
          "y": 7.62
      },
      {
        "name": "Other10",
        "y": 7.62
    },
    {
      "name": "Other99",
      "y": 7.62
  },
  {
    "name": "Other88",
    "y": 7.62
},
{
  "name": "Other77",
  "y": 7.62
},
{
  "name": "Other66",
  "y": 7.62
},
{
  "name": "Othe55",
  "y": 7.62
},
{
  "name": "Other44",
  "y": 7.62
},
{
  "name": "Other100",
  "y": 7.62
}

            ]
        }
    ]
});
}]);
