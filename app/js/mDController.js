(function() {
    'use strict';

    angular
        .module('app')
        .controller('mDController', mDController);

    mDController.$inject = ['$scope', '$stateParams', '$log', 'mFactory'];

    function mDController($scope, $stateParams, $log, mFactory) {

        var vm = this;
        vm.ctrlName = 'mDController';

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
