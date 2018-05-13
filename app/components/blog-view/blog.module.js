import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { BlogComponent } from './blog.component';

export const blog = angular
    .module('blog', [
        uiRouter
    ])
    .component('blog', BlogComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('blog', {
                url: '/blog',
                component: 'blog'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;