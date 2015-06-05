app.controller('searchController', function($scope) {
	
	
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
			}
			else {
				$("#response").empty();
			}
		}, 500);
	});
	
	$scope.searchResults = ;
	
	$scope.results = $scope.searchResults.items;
});