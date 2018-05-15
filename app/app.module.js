import "angular";
import uiRouter from  'angular-ui-router';

import {AppComponent} from './app.component';
//import {ComponentsModule} from './components/components.module';
// import {CommonModule} from './common/common.module';
import './app.css';

export const AppModule = angular
    .module('app', [
        // ComponentsModule,
        uiRouter
    ])
    .component('app', AppComponent)
    .config(($stateProvider, $locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('app', {
            url: '/',
            component: 'app'
        });
    })
    .name;

