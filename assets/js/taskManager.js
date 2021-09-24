class TaskManager {

    constructor(tasks, currentId) {

        this._tasks = [];
        this._currentId = 0;

    }

    addTask(taskName, description, assigned, dueDate, status = "TO-DO") {

        this.currentId++;
        const newTask = {
            id: this._currentId,
            taskName,
            description,
            assigned,
            dueDate,
            status
        }
        
        this._tasks.push(newTask);

    }

    render() {

        const tasksHtmlList = [];

        for (let task of this._tasks) {

            console.log(task)
            const taskHtml = createTaskHtml(task.taskName, task.description, task.assigned, task.dueDate, task.status);
            tasksHtmlList.push(taskHtml);
            const tasksHtml = tasksHtmlList.join('');
            document.getElementById('taskCard').innerHTML = tasksHtml

        }

    };

};


const createTaskHtml = (taskName, description, assigned, dueDate, status) => {

    const html = `

    <li class="list-group-item ">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="alignment">
                            <h5 class="card-title" id="title">${taskName}</h5>
                            <button type="button" class="btn btn-primary">Status</button>
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

    return html;

}

