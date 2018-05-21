import template from "./board-list.html";

export const BoardListComponent = {
    bindings: {
        tasks: '<',
    },
    controllerAs: 'ctrl',
    template,
    controller: class BoardListController {
        constructor($http) {
            'ngInject';
            this.$http = $http;
        }
        $onInit() {
            this.$http.get('/data/tasks.json')
                .then(res =>
                    this.tasks = res.data
                );
        }
        $onChanges() {}
    }
};