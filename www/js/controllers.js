angular.module('starter.controllers', [])

  .controller('BmiController', function($scope) {
    $scope.data = {};
    $scope.calculateBMI = function() {
      var person = new Person ({
        weight: $scope.data.weight,
        height: $scope.data.height
      });
      person.calculate_bmi_metric();
      $scope.person = person;
    };
  })

  .controller('AboutController', function($scope) {

  });
