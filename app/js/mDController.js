(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('mDController', mDController);

	mDController.$inject = ['$scope','$log','mFactory'];

	function mDController($scope, $log, mFactory) {
		//content
	}
})();