import template from './board.html';

export const BoardComponent = {
    template,
    controller: class BoardComponent {
        constructor() {
            'ngInject';
        }

        printHelloWorld() {
            console.log("hello world BoardComponent");
        }
    }
};