var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  $http.get('data/posts.json').
    then(function(data) {
      $scope.posts = data.data;
    });
});

app.controller("EstablishmentsCtrl", function($scope, $http) {

  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";

  var testLink = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.785219,-79.227067&radius=5000&sensor=true&types=establishment&key=AIzaSyBXL28adVfDXuzoBeu2stK5cJRPFwAOi1w";

  $http.get(testLink).
    then(function(data) {
      $scope.returnData = data.data;
    });
});