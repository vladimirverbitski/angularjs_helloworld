import angular from 'angular';

import BlogComponent from './blog-view/blog.module';
import InfoComponent from './info-view/info.module';

export const ComponentsModule = angular
    .module('app.components', [
        BlogComponent,
        InfoComponent
    ])
    .name;