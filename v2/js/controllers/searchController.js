app.controller('searchController', function($scope, $http) {
	//A global variable containing the route to the current folder
	var path = 'http://localhost/barmuziek/v2/';
	//Retrieves the current queue for the chosen playerID
	$scope.getQueue = function() {
		$http.get(path + "queueFetcher.php?pid=12345")
			.success(function (response) {$scope.songs = response.records;});
	}
	
	$scope.getQueue();
	
	//An interval of 10s when the current queue gets refreshed from the database
	var i;
	i = setInterval($scope.getQueue, 10000);
	
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
	
	//When the user selects a song to suggest this function gets called.
	//It takes the url and the title of the suggestion and pushes it to
	//the database.
	$scope.onResultSelect = function(YTID, title) {
		var suggestion = $.param({
			YTID: YTID,
			title: title.replace(/"+/g, '')
		});
		
		var request = {
			method: 'POST',
			url: path + 'queuePusher.php',
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
	
	//Adds a like to the target song in the database
	$scope.addLike = function(id) {
		var suggestion = $.param({
			id: id
		});
		
		var request = {
			method: 'POST',
			url: path + 'addLike.php',
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
	
	//Adds a dislike to the target song in the database
	$scope.addDislike = function(id) {
		var suggestion = $.param({
			id: id
		});
		
		var request = {
			method: 'POST',
			url: path + 'addDislike.php',
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