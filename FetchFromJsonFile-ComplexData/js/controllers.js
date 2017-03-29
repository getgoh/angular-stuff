var app = angular.module("MyApp", []);

// some common configs for angularJS
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
]);

app.controller("EstablishmentsCtrl", ['$scope', '$http', '$sce', function($scope, $http, $sce) 
{
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";


    $scope.renderHtml = function (htmlCode) {
          return $sce.trustAsHtml(htmlCode);
      };


  // this data is a sample fetched from Google Places API
  var testLink = "data/establishments.json";

  $http.get(testLink)
    .then(function(data) {
      $scope.returnData = data.data;
    });
}]);

