'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tutoCondeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Scope no debe tener items al iniciar', function () {
    expect(scope.tareas.length).toBe(0);
  });

  it('debe agregar items al comenzar', function(){
    scope.tarea='Test 1';
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });

  it('debe agregar y luego eliminar items al comenzar', function(){
    scope.tarea='Test 1';
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });

});
