//http://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=BiGP798nMwM&format=json
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: 640,
		width: 360,
		videoId: '37eEUsd1ASA',
		playerVars: { 'controls': 0, 'showinfo': 0, 'iv_load_policy': 3 },
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

//Global interval variable
var i;
//When the player is loaded it sets the default volume,
//plays the video, gets the video duration and starts the progress bar
function onPlayerReady(event) {
	event.target.setVolume(70);
	event.target.playVideo();
	//event.target.pauseVideo();
	player.duration = player.getDuration();
	i = setInterval(percentageWatched, 1000);
}

//When the player changes state (playing -> paused) the
//media controls will change according to the current state
function onPlayerStateChange(event) {
	playButton = $("#control-play i");
	
	switch(event.data) {
		case -1: //UNSTARTED
			player.duration = null;
			break;
		case 0: //ENDEND
			progressBar = $("#progress-bar");
			progressBar.css("width", "100%");
			clearInterval(i);
			nextControl();
			break;
		case 1: //PLAYING
			if(!playButton.hasClass("mdi-av-pause")) {
				playButton.removeClass("mdi-av-play-arrow");
				playButton.addClass("mdi-av-pause");	
			}
			break;
		case 2: //PAUSED
			if(!playButton.hasClass("mdi-av-play-arrow")) {
				playButton.removeClass("mdi-av-pause");
				playButton.addClass("mdi-av-play-arrow");	
			}
			break;
	}
}

//Gets called when the player resets
function onPlayerReset() {
	clearInterval(i);
}

//Gets called every second to update the progress bar
function percentageWatched() {
	if(player.duration == null)
		player.duration = player.getDuration();
	
	var position = player.getCurrentTime();
	var duration = player.duration;
	var c = position / duration * 100;
	c = Math.round(c);
	
	progressBar = $("#progress-bar");
	progressBar.css("width", c+"%");
}

//Changes the volume according to the volume slider
function volumeChanger() {
	var val = $("#volume-control").val();
	player.setVolume(val);
}

//When called mutes/unmutes the video and stores/restores the
//original value
function volumeMute() {
	vol = player.getVolume();
	volumeControl = $("#volume-control");
	
	if(vol > 0) {
		player.setVolume(0);
		volumeControl.val(0);
		player.volume = vol;
	}
	else {
		player.setVolume(player.volume);
		volumeControl.val(player.volume);
	}
}

//Handles everything when the pause/play button is pressed
function playPauseControl() {
	playButton = $("#control-play i");
	var state = player.getPlayerState();
	
	if(state == 1) {
		playButton.removeClass("mdi-av-pause");
		playButton.addClass("mdi-av-play-arrow");		
		player.pauseVideo();
		clearInterval(i);
	}
	else {
		playButton.removeClass("mdi-av-play-arrow");
		playButton.addClass("mdi-av-pause");		
		player.playVideo();
		i = setInterval(percentageWatched, 1000);
	}
}

//Loads in the next video when the next button is pressed
function nextControl() {
	var nextVideo = 'yUIDTxeQmnc';
	player.loadVideoById(nextVideo, "medium");
	clearInterval(i);
	i = setInterval(percentageWatched, 1000);
}

//Goes back to the previous played video
function prevControl() {
	var prevVideo = 'ELer8MF1bn4';
	player.loadVideoById(prevVideo, "medium");
	clearInterval(i);
	i = setInterval(percentageWatched, 1000);
}