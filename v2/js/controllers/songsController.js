app.controller('songsController', function($scope, $http) {
	var path = 'http://localhost/barmuziek/v2/';
	$scope.getQueue = function() {
		$http.get(path + "queueFetcher.php?pid=12345")
			.success(function (response) {$scope.songs = response.records;});
	}
	
	$scope.getQueue();
	
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	$('.modal-trigger').leanModal();
	
	$("#volume-control").on("change", volumeChanger);
	$("#control-mute").click(volumeMute);
	
	$("#control-prev").click(prevControl);
	$("#control-play").click(playPauseControl);	
	$("#control-next").click(nextControl);
	
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