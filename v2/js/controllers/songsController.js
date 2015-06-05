app.controller('songsController', function($scope, $http) {
	$http.get("http://localhost/barmuziek/v2/queueFetcher.php?pid=12345")
    .success(function (response) {$scope.songs = response.records;});
	
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

});