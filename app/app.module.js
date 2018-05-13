import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import './app.css';

export const app = angular
    .module('app', [
        ComponentsModule,
        CommonModule,
    ])
    .config([])
    .component('app', AppComponent)
    .name;

