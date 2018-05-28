export class BoardService {
    constructor(BoardHttpService) {
        'ngInject';
        this.boardHttpService = BoardHttpService;
        this._taskList = [];
    }

    loadTasks() {
        return this.boardHttpService.getTasks()
            .then(response => this._taskList = response);
    }

    get taskList() {
        return this._taskList;
    }

}