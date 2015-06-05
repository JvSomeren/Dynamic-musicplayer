var app = angular.module('barmuziekApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'songsController',
		templateUrl: 'views/song-card.html'
	})
	.otherwise(
	{
		redirectTo: '/'
	});
});