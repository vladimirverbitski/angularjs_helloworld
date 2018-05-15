import template from "./board-list.html";

export const BoardListComponent = {
    bindings: {
        tasks: '<',
    },
    template,
    controller: class BoardListController {
        constructor() {
            'ngInject';
        }
        $onInit() {
            this.newTask = {
                title: '',
                selected: false
            };
        }
        $onChanges(changes) {
            if (changes.newTask) {
                this.tasks = Object.assign({}, this.taskData);
            }
        }
        addTask({ task }) {
            if (!task) return;
            this.tasks.unshift(task);
            this.newTask = {
                title: '',
                selected: false
            };
        }
    }
};