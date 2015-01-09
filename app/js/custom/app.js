var wordBot = angular.module('wordBot', []);
    wordBot.controller('wordController', [
      '$scope', 
      '$http', 
      function ($scope, $http){

    var url = 'https://wordrobot.herokuapp.com/api/words',
        $http.get(url).success( function (words){
          console.log(words);
        });
    }]);