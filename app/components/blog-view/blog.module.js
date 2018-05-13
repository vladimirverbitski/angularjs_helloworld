'use strict';

angular.module('app.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: '/components/blog-view/blog.html',
    controller: 'BlogController'
  });
}])

.controller('BlogController', [function() {

}]);