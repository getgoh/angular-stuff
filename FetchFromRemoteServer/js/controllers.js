var app = angular.module("MyApp", []);


app.controller("RecordsCtrl", ['$scope', '$http', function($scope, $http) 
{
  // this prohibits us from accessing remote sources
  //$http.defaults.headers.common["X-Custom-Header"] = "Angular.js";

  var testLink = "https://www.w3schools.com/angular/customers.php";

  $http.get(testLink)
    .then(function(data) {
      $scope.returnData = data.data;
    });
}]);

