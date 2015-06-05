function showResponse(response) {
	var responseString = JSON.stringify(response, '', 2);
	document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
	gapi.client.setApiKey('AIzaSyDVG6RZOn-SdxCuJ6tNUl5Ofv_HNsyMtns');
}

function search(searchRequest) {
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		type: 'video',
		q: searchRequest
	});
	
	request.execute(onSearchResponse);
}

function onSearchResponse(response) {
	$("#response").empty();
	showResponse(response);
}