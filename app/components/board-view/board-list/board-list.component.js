import template from "./board-list.html";

export const BoardListComponent = {
    bindings: {
        tasks: '<',
    },
    controllerAs: 'ctrl',
    template,
    controller: class BoardListController {
        constructor(BoardComponent) {
            this.BoardComponent = BoardComponent;
        }

        $onInit() {
            console.log(this.BoardComponent.getTask());
        }
    }
};