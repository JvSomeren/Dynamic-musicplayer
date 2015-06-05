app.controller('songsController', function($scope, $http) {
	$http.get("http://localhost/barmuziek/v2/queueFetcher.php?pid=12345")
    .success(function (response) {$scope.songs = response.records;});
});