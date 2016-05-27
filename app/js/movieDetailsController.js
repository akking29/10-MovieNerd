(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieDetailsController', movieDetailsController);

    movieDetailsController.$inject = ['$scope', '$stateParams', '$log', 'movieFactory'];

    function movieDetailsController($scope, $stateParams, $log, mFactory) {

        var vm = this;
        vm.ctrlName = 'movieDetailsController';

        activate();

        function activate() {
            mFactory.getDetails($stateParams.id).then(
                function(response) {
                    vm.details = response.data;
                    console.log(vm.details);
                });
        }
    };

})();
