import 'angular';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {CommonModule} from './common/common.module';
import {SharedComponentsModule} from "./shared-components/shared-components.module";
import './app.css';

export const AppModule = angular
    .module('app', [
        ComponentsModule,
        CommonModule,
        SharedComponentsModule
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
            component: 'app',
            redirectTo: 'info'
        });
    })
    .name;

