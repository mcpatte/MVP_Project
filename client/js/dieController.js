angular.module('gg.DieController', [])

.controller('DieController', function($scope){
  $scope.message = "Hey from controller"
  $scope.dieRoll = function(){
    $scope.results = Math.floor(Math.random() * 9)+1;
  }
})