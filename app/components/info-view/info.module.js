'use strict';

angular.module('app.info', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/info', {
    templateUrl: 'components/info-view/info.html',
    controller: 'InfoController'
  });
}])

.controller('InfoController', [function() {

}]);