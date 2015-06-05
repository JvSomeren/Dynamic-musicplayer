var app = angular.module('barmuziekApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'songsController',
		templateUrl: 'views/song-card.html'
	})
	.when('/suggest',
	{
		controller: 'searchController',
		templateUrl: 'views/suggest.html'
	})
	.otherwise(
	{
		redirectTo: '/'
	});
});