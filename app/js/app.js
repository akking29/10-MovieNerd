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
	  					controller: 'mController as vm'
	  					
	  				})

	  			.state('results',{
	  				url:"/results?id",
	  				templateUrl: 'app/partials/results.html',
	  				controller: 'mDController as vm'
	  			})
	  });
})();