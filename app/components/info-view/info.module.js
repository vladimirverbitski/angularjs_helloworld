import 'angular';
import uiRouter from 'angular-ui-router';
import { InfoComponent } from './info.component';

export const InfoModule = angular
    .module('infoModule', [
        uiRouter
    ])
    .component('infoComponent', InfoComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('infoComponent', {
                parent: 'app',
                url: '/info',
                component: 'infoComponent'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;