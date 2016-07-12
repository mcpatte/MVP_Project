angular.module('gg.GladController', [])

.controller('GladController', function($scope){
  $scope.gladiator = {};
  $scope.addName = function(){
    console.log($scope.gladiator.name);
  }
})