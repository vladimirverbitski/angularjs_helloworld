import 'angular';
import uiRouter from '@uirouter/angularjs';
import {BoardComponent} from './board.component';

export const BoardModule = angular
    .module('board', [
        uiRouter
    ])
    .component('board', BoardComponent)
    .config($stateProvider => {
        'ngInject';
        $stateProvider
            .state('board', {
                parent: 'app',
                url: 'board',
                component: 'board'
            });
    })
    .name;