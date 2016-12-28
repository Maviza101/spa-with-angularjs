(function () {
    "use strict";
    angular.module("LunchCheck", [])
<<<<<<< HEAD
    .controller("LunchCheckController",  LunchSizeChecker);

    LunchSizeChecker.$inject = ["$scope"];

    function LunchSizeChecker($scope) {
        $scope.msgAboutLunchSize = "";
        $scope.checkLunchSize = function() {
            var stringList = $scope.listOfDishes;

            // The undefined case takes care of when the user clicks the button without ever having entered text in the textbox.
            if (stringList === "" || stringList === undefined) {
                $scope.msgAboutLunchSize = "Please enter data first";
            }
            else {
=======
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
>>>>>>> dev
            }
        }
    }
})();
