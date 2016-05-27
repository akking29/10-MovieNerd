(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('mController', mController);

    mController.$inject = ['$scope', '$log', 'mFactory'];

    function mController($scope, $log, mFactory) {

        var vm = this;
        vm.ctrlName = 'mController';

        vm.search = function(title) {

            mFactory.getMovies(title).then(
                function(response) {
                    vm.movies = response.data;
                    vm.titles = vm.movies.Search;
                    console.log(vm.movies);
                    console.log(vm.titles);

                });
        };
        //content


    }

})();
