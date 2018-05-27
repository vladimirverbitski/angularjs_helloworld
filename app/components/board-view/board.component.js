import template from './board.html';

export const BoardComponent = {
    template,
    controller: class BoardComponent {
        constructor($http) {
            'ngInject';
            this.$http = $http;
        }

        getTask() {
            this.$http.get('/data/tasks.json')
                .then(res =>
                    this.tasks = res.data
                );
        }

    }
};