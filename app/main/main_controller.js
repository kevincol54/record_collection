(function(){
  'use strict';


  angular.module('myapp-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })



    .controller('MainCtrl', function($scope) {

      $scope.records = [];


      $scope.addRecord = function(){
        
        var newRecord = {
          artistName: $scope.artistName,
          albumName: $scope.albumName
        };

        $scope.records.push(newRecord);
        $scope.albumName = '';
        $scope.artistName = '';
      }

    });

})();