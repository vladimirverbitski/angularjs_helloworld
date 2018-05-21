import {BlogModule} from './blog-view/blog.module';
import {InfoModule} from './info-view/info.module';
import {BoardModule} from './board-view/board.module';
import {NgDragDropModule} from "ng-drag-drop/index";

export const ComponentsModule = angular
    .module('app.components', [
        BlogModule,
        BoardModule,
        InfoModule,
        NgDragDropModule
    ])
    .name;