const createTaskHtml = (id, taskName, description, assigned, dueDate, status) => {

    let doneButtonVisibility = 'visible';
    if (status === 'DONE') {
        doneButtonVisibility = 'invisible';
    };

    return `

    <li class="list-group-item" data-task-id = "${id}">
                <div class="card" style="width: 18rem;">
                    <div class="card-body" id="data-task-id">
                        <div class="alignment">
                            <h5 class="card-title" id="title">${taskName}</h5>
                            <button type="button" class="btn btn-primary done-button ${doneButtonVisibility}">Mark As Done</button>
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
                        <p class="card-text">${assigned}</p>
                        <p class="card-text">${dueDate}</p>
                        <div class="alignment">
                            <p class="card-text">${status}</p>
                            <a href="#" class="btn btn-primary">Delete</a>
                        </div>
                    </div>
                </div>
            </li>

    `

};


class TaskManager {

    constructor(tasks, currentId) {
        this._tasks = [];
        this._currentId = 0;
    };

    addTask(taskName, description, assigned, dueDate, status = "TO-DO") {

        this._currentId++;

        const newTask = {
            id: this._currentId,
            taskName,
            description,
            assigned,
            dueDate,
            status
        }
        
        this._tasks.push(newTask);

    };

    render() {
        const tasksHtmlList = [];

        for (let task of this._tasks) {
            const taskHtml = createTaskHtml(task.id, task.taskName, task.description, task.assigned, task.dueDate, task.status);
            tasksHtmlList.push(taskHtml);
            const tasksHtml = tasksHtmlList.join('');
            document.getElementById('taskCard').innerHTML = tasksHtml
        }

    };

    getTaskById(taskId) {
        let foundTask;

        for(let i = 0; i < this._tasks.length; i++) {
            let task = this._tasks[i];

            if(task.id === taskId) {
                foundTask = task;
            }
        }
        return foundTask;

    };

    save() {

        let tasksJson = JSON.stringify(this._tasks)
        localStorage.setItem("task", tasksJson);

        let currentId = JSON.stringify(this._currentId);
        localStorage.setItem("currentid", currentId); // Check underscores

    };

    load() {

        if (localStorage.getItem('task')) {
            let tasksJson = localStorage.getItem('task');
            this._tasks = JSON.parse(tasksJson);
        } 

        if(localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');
            this._currentId = parseInt(currentId);
        }

    };
};


