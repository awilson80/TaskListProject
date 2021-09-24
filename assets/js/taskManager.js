class TaskManager {

    constructor(currentId) {

        this._tasks = [];
        currentId = this._currentId;

    }

    addTask (taskName, description, assigned, date, status, id) {

        this.currentId++;
        this._tasks.push(taskName, description, assigned, date, 'TODO', id);

    }

}

let task2 = new TaskManager();
let task3 = new TaskManager();

console.log(task1);
console.log(task2);

