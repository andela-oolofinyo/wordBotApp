var wordBot = angular.module('wordBot', []);
    wordBot.controller('wordController', [
      '$scope', 
      '$http', 
      function ($scope, $http){

    var url = 'https://wordrobot.herokuapp.com/api/words';
    $scope.tab = true;
    $scope.tocall = function () {
      
    }
    $scope.words = [];
        $http.get(url).success( function (data){
          $scope.words=data;
          console.log($scope.words);
        }).error(function (data){
            console.log("error: "+ data);
        });
    }]);