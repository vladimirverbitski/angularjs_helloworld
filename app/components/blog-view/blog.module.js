import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { BlogComponent } from './blog.component';

export const BlogModule = angular
    .module('blog', [
        uiRouter
    ])
    .component('blog', BlogComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('blog', {
                url: '/blog',
                component: 'blog'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;