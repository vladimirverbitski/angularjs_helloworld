import angular from 'angular';

export const FooterModule = angular
    .module('app.common', [
        NavModule,
        FooterModule
    ])
    .name;