// currencyConverter.js
angular.module('converterApp')
    .directive('currencyConverter', function() {
        return {
            restrict: 'E',
            templateUrl: 'currencyConverter.html',
            controller: function($scope) {
                $scope.currencies = ['Rupee', 'Dollar', 'Euro'];
                $scope.convertCurrency = function() {
                    let rates = {
                        'Rupee': 1,
                        'Dollar': 0.013,
                        'Euro': 0.011
                    };
                    $scope.result = ($scope.amount * rates[$scope.toCurrency]) / rates[$scope.fromCurrency];
                };
            }
        };
    });
