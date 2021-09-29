const createTaskHtml = (id, taskName, description, assigned, dueDate, status) => {

    let doneButtonVisibility = 'visible';
    if (status === 'Done') {
        doneButtonVisibility = 'invisible';
    };

    return `

    <li class="list-group-item colorblock" data-task-id = "${id}">
	  <div class="card" style="width: 18rem;">
		<div class="card-body" id="data-task-id">
		  <div class="alignment">
		    <h5 class="card-title" id="title">Task Name: ${taskName}</h5>
			<button type="button" class="btn btn-success done-button ${doneButtonVisibility}">Mark as done</button>
			    </div>
                    <p class="card-text">Task Description: ${description}</p>
                    <p class="card-text">Assigned To: ${assigned}</p>
                    <p class="card-text">Due Date: ${dueDate}</p>
                    <div class="alignment">
                    <p class="card-text">Status: ${status}</p>
                    <div class="move">
                        <button type="button" class="btn btn-success delete-button">Delete</button>
                    </div>
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

    addTask(taskName, description, assigned, dueDate, status = "To-do") {

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
            document.getElementById('tasksList').innerHTML = tasksHtml
        }

    };

    getTaskById(taskId) {
        let foundTask;

        for (let i = 0; i < this._tasks.length; i++) {
            let task = this._tasks[i];

            if (task.id === taskId) {
                foundTask = task;
            }
        }
        return foundTask;

    };

    save() {

        let tasksJson = JSON.stringify(this._tasks)
        localStorage.setItem("task", tasksJson);

        let currentId = this._currentId.toString();
        localStorage.setItem("currentid", currentId); // Check underscores

    };

    load() {

        if (localStorage.getItem('task')) {
            let tasksJson = localStorage.getItem('task');
            this._tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');
            this._currentId = parseInt(currentId);
        }

    };

    deleteTask(taskId) {
        let newTasks = [];

        for (let i = 0; i < this._tasks.length; i++) {
            let task = this._tasks[i];

            if (task.id !== taskId) {
                newTasks.push(task)
                // this._tasks = newTasks;
            };
        };

        this._tasks = newTasks; // uncomment this to have a less buggy experience lol
        document.getElementById('tasksList').innerHTML = '';
    };
};


