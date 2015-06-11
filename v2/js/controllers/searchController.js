app.controller('searchController', function($scope, $http) {
	$scope.getQueue = function() {
		$http.get("http://localhost/barmuziek/v2/queueFetcher.php?pid=12345")
			.success(function (response) {$scope.songs = response.records;});
	}
	
	$scope.getQueue();
	
	//Acts as a delay for the song searcher so the API doesnt load
	//each time a character is entered
	var delay = (function() {
		var timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();
	
	//Handles the call of the search() function when something is entered
	$("#search-song").keyup(function(){
    delay(function() {
			var searchRequest = $("#search-song").val();
		
			if(searchRequest != "") {
				search(searchRequest);
				console.log('Searched for: ', searchRequest);
			}
			else {
				console.log("empty search");
				$(".search-results").remove();
			}
		}, 500);
	});
	
	$scope.makeSearchAnArray = function() {
		$scope.results = $scope.searchResults.items;
	}
	
	$scope.onResultSelect = function(YTID, title) {
		var suggestion = $.param({
			YTID: YTID,
			title: title.replace(/"+/g, '')
		});
		
		var request = {
			method: 'POST',
			url: 'http://localhost/barmuziek/v2/queuePusher.php',
			data: suggestion,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}
		$http(request).success(function() {
				$(".search-results").remove();
				$("#search-song").val("");
				$scope.getQueue();
			})
			.error(function() {
				alert("Oops... Something went wrong!");
			});
	};
	
	$scope.addLike = function(id) {
		var suggestion = $.param({
			id: id
		});
		
		var request = {
			method: 'POST',
			url: 'http://localhost/barmuziek/v2/addLike.php',
			data: suggestion,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}
		$http(request).success(function() {
			$scope.getQueue();
		})
		.error(function() {
			console.log("Error when liking");
		});
	}
	
	$scope.addDislike = function(id) {
		var suggestion = $.param({
			id: id
		});
		
		var request = {
			method: 'POST',
			url: 'http://localhost/barmuziek/v2/addDislike.php',
			data: suggestion,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}
		$http(request).success(function() {
			$scope.getQueue();
		})
		.error(function() {
			console.log("Error when disliking");
		});
	}
});