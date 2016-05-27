(function() {
	'use strict';

	var app = angular
	  .module('app', [ 'ui.router' ]);

	  app.config(function($stateProvider, $urlRouterProvider){

	  		$urlRouterProvider.otherwise('/main');

	  			$stateProvider.state
	  				('main', {
	  					url: "/main",
	  					templateUrl: 'app/partials/main.html',
	  					controller: 'movieController as vm'
	  					
	  				})

	  			.state('results',{
	  				url:"/results?id",
	  				templateUrl: 'app/partials/results.html',
	  				controller: 'movieDetailsController as vm'
	  			})
	  });
})();