'use strict';

angular.module('multiSliderDemo', ['angularMultiSlider', 'ngAnimate', 'ui.bootstrap']);

angular.module('multiSliderDemo')
  .controller('DemoCtrl', function ($rootScope, $scope, $uibModal) {
    $scope.sliders = [
      { title: 'Weight: ', value: 100 },
      { title: 'File: ', value: 40, color: '#00FF00', visible: true, enabled: false },
      { title: 'Test: ', value: 50, color: 'blue', visible: false, enabled: false },
      { title: 'Folder: ', value: 10 }
    ];

  });
