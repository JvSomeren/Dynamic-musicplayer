app.controller('songsController', function($scope, $http) {
	//A global variable containing the route to the current folder
	var path = 'http://localhost:8080/barmuziek/v2/';
	//Retrieves the current queue for the chosen playerID
	$scope.getQueue = function() {
		$http.get(path + "queueFetcher.php?pid=12345")
			.success(function (response) {$scope.songs = response.records;});
	}
	
	$scope.getQueue();
	
	//An interval of 10s when the current queue gets refreshed from the database
	var i;
	i = setInterval($scope.getQueue, 10000);
	
	//Something to be looked at. Currently you need to refresh the page to make the
	//player work
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	//Initializes the modal to suggest a song
	$('.modal-trigger').leanModal();
	
	//Volume control event listeners
	$("#volume-control").on("change", volumeChanger);
	$("#control-mute").click(volumeMute);
	
	//Playback control event listeners
	$("#control-prev").click(prevControl);
	$("#control-play").click(playPauseControl);	
	$("#control-next").click(nextControl);
	
	//Playback control hotkey event listeners
	$(document).keypress(function(event) {
		switch(event.which) {
			case 32: //Space, Pause/Play
				event.preventDefault();
				playPauseControl();
				break;
			case 110: //n, Next
				nextControl();
				break;
			case 112: //p, Previous
				prevControl();
				break;
			case 109: //m, Mute
				volumeMute();
				break;
		}
	});
	
	//When a song is loaded into the player it gets removed from the database
	$scope.removeTopFromQueue = function(id) {
		var suggestion = $.param({
			id: id
		});
		
		var request = {
			method: 'POST',
			url: path + 'queueDeleter.php',
			data: suggestion,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}
		$http(request).success(function() {
			$scope.getQueue();
		})
		.error(function() {
			console.log("Error when deleting");
		});
	}
	
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