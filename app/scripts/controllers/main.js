'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
     var baseURL='http://lorempixel.com/960/450/';
     $scope.setInterval=5000;

     $scope.slides=[
     {
     	title:'Manten la forma',
     	image:baseURL+'sports/',
     	text:'practica deporte'
     },
     {
     	title:'Buena alimentacion',
     	image:baseURL+'food/',
     	text:'frutas y verduras'
     },
     {
     	title:'Contacto con la naturaleza',
     	image:baseURL+'nature/',
     	text:'aire fresco'
     }
     ];

     var baseURL='http://lorempixel.com/200/200/';
     $scope.contenido=[
     {
     	image:baseURL+'people/',
     	title:'Sobre nosotros',
     	summary:'Empresa comprometida'
     },
     {
     	image:baseURL+'business/',
     	title:'Nuestros servicios',
     	summary:'Servicios ofrecidos'
     },
     {
     	image:baseURL+'transport/',
     	title:'Contactenos',
     	summary:'direccion y telefono'
     }
     ];

  });
