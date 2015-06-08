var app = angular.module('barmuziekApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'homeController',
		templateUrl: 'views/home.html'
	})
	.when('/player',
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