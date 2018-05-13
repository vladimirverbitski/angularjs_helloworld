import angular from 'angular';

import { BlogModule } from './blog-view/blog.module';
import { InfoModule } from './info-view/info.module';

export const ComponentsModule = angular
    .module('app.components', [
        BlogModule,
        InfoModule
    ])
    .name;