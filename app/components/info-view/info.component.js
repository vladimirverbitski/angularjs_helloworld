import templateUrl from './info.html';

export const InfoComponent = {
    templateUrl,
    controller: class InfoComponent {
        constructor(TodoService) {
            'ngInject';
            this.todoService = TodoService;
        }
        $onInit() {
            this.newTodo = {
                title: '',
                selected: false
            };
            this.todos = [];
            this.todoService.getTodos().then(response => this.todos = response);
        }
    }
};