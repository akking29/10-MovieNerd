(function() {
    'use strict';

    angular
        .module('app')
        .factory('mFactory', mFactory);

    mFactory.$inject = ['$http', '$q', '$log'];

    function mFactory($http, $q, $log) {

        var service = {

                getMovies: getMovies
            };
            //content
   
   
    return service;

    function getMovies(title) {
        var defer = $q.defer();

        $http({

            method: 'GET',
            url: 'http://www.omdbapi.com/?s=' + title

        }).then(
            function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                    toastr.success('Movies are here!');
                } else {
                    defer.reject(response);
                    toastr.warning('No movies.')
                }
            },
            function(error) {
                defer.reject(error);
                $log.error(error);
                toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);

            });
        return defer.promise;
    };

   }; 

})();
