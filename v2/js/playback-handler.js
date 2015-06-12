$(document).ready(function() {
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
		
			if(searchRequest != "")
				search(searchRequest);
			else
				$("#response").empty();
		}, 500);
	});
});