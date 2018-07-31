var postApp = angular.module('postApp', []);
postApp.controller('postController', function ($scope, $http) {
    $scope.user = {};
    $scope.submitForm = function () {
        $http({
            method: 'POST',
            url: 'http://example.com/clone.php',
            data: $scope.user,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(function (data) {
                if (data.errors) {
                    $scope.errorName = data.errors.name;
                    $scope.errorUserName = data.errors.username;
                    $scope.errorEmail = data.errors.email;
                } else {
                    $scope.message = data.message;
                }
            }, function (error) {

            });
    };
});