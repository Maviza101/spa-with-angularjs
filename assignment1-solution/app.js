(function () {
    "use strict";
    angular.module("LunchCheck", [])
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
            }
        }
    }
})();
