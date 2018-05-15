export class BoardService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }
    getTask() {
        return this.$http.get('/data/').then(response => response.data);
    }
}

BoardService.$inject = ['$http'];