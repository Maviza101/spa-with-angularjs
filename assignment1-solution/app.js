(function () {
    "use strict";
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", lunchSizeChecker);

    lunchSizeChecker.$inject = ["$scope"];

    function lunchSizeChecker($scope) {
        $scope.msgAboutLunchSize = "";
        $scope.lunchDishes = "";
        $scope.showValidityOfInput = "#ccc";

        $scope.checkLunchSize = function() {
            if ($scope.lunchDishes === "") {
                $scope.msgAboutLunchSize = "Please enter data first";
                $scope.showValidityOfInput = "#ee4444";
            }
            else {
                $scope.showValidityOfInput = "#44ee44";
                var listOfDishes = $scope.lunchDishes.split(",");
                if (listOfDishes.length < 4) {
                    $scope.msgAboutLunchSize = "Enjoy!";
                }
                else {
                    $scope.msgAboutLunchSize = "Too much!";
                }
            }
        }
    }
})();
