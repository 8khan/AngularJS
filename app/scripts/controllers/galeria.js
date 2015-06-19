'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures=$scope.pictures=[];

    var baseURL="http://lorempixel.com/300/180/";

    var titles=["Comida Sana", "Salud y trabajo", "Vida en la ciudad",
    "Mantente activo", "Cuida tu aspecto"];

    var keywords=["food", "business", "city", "sport",
    "fashion", "nightlife"];

    var dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  
  $scope.addPics=function(i){
  	pictures.push({
  		url:baseURL+keywords[i],
  		titles:titles[i],
  		summary:dummyText
  	})
  }
  for(var i=0;i<5;i++){
  	$scope.addPics(i);
  }
  });
