(function() {
    'use strict';
    angular.module("ValueOfNameCalculator", [])
        .controller("MyFirstController", function($scope) {
            $scope.defName = "Foo Bar";
            $scope.name = "";
            $scope.valueOfName = 0;

            $scope.displayNumericValueOfString = function() {
                var totalValueOfName = calculateTotalValueOfString($scope.name);
                $scope.valueOfName = totalValueOfName;
            };

            function calculateTotalValueOfString(str) {
                var totalValue = 0;
                // str.forEach(char -> totalValue += charCodeAt(char));
                for (var i = 0; i < str.length; i++) {
                    totalValue += str.charCodeAt(i);
                }
                return totalValue;
            }

        });
})();
