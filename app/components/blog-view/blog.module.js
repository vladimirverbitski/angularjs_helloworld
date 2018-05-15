import 'angular';
import uiRouter from 'angular-ui-router';
import {BlogComponent} from './blog.component';

export const BlogModule = angular
    .module('blogModule', [
        uiRouter
    ])
    .component('blogComponent', BlogComponent)
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('blogComponent', {
                parent: 'app',
                url: '/blog',
                component: 'blogComponent'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;