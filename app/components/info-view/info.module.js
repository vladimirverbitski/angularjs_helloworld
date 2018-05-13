import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { InfoComponent } from './info.component';

export const InfoModule = angular
    .module('info', [
        uiRouter
    ])
    .component('info', InfoComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('info', {
                url: '/info',
                component: 'info'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;