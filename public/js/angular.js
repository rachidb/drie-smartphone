'use strict';
angular.module('App', [])
  .controller('Controller', function($scope,$http) {
  $scope.mail='';
  $scope.text='';
  $scope.sent = false;
  $scope.send=function(mail,text){
      console.log(mail+"  "+text);
      var data = {
        email: mail,
        emailText: text 
      };
      $http.post("/send",data);
      $scope.sent = true;
  };
  });