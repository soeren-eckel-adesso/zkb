angular.module("umbraco").controller("KeyValuePairsPrevalueController", function ($scope) {
    if (!$scope.model.value) {
        $scope.model.value = [];
    }

    $scope.keyValuePairs = $scope.model.value;

    $scope.addPair = function () {
        $scope.keyValuePairs.push({key: "", value: ""});
    };

    $scope.removePair = function (pair) {
        var index = $scope.keyValuePairs.indexOf(pair);
        if (index !== -1) {
            $scope.keyValuePairs.splice(index, 1);
        }
    };
});
