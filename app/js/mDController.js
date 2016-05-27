(function() {
    'use strict';

    angular
        .module('app')
        .controller('mDController', mDController);

    mDController.$inject = ['$scope', '$log', 'mFactory'];

    function mDController($scope, $log, mFactory) {

        var vm = this;
        vm.ctrlName = 'mDController';

        vm.detailSearch = function(title) {

            mFactory.getDetails(title).then(
                function(response) {
                    vm.details = response.data;

                    console.log(vm.details);


                });

        };
        
        console.log(vm.details);
    };
    
})();
