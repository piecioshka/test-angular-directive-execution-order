(function () {
    'use strict';

    var mod = angular.module('execution-order', []);

    mod.controller('ExecutionOrderController', function ($scope) {
        $scope.isDisplayed = true;
    });

    angular.bootstrap(document, ['execution-order']);

}());
