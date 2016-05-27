(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('movieController', movieController);

    movieController.$inject = ['$scope', '$log', 'movieFactory'];

    function movieController($scope, $log, mFactory) {

        var vm = this;
        vm.ctrlName = 'movieController';

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
