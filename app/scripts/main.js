(function () {
    'use strict';

    var mod = angular.module('executionOrder', []);

    mod.controller('ExecutionOrderController', function ($scope) {
        $scope.isDisplayed = true;
    });

    angular.bootstrap(document, ['executionOrder']);

}());
