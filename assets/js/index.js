const tasks = new TaskManager();
const newTaskNameInput = document.querySelector('#taskName');
const newTaskDescripInput = document.querySelector('#taskDescrip');
const newAssignedToInput = document.querySelector('#assignedTo');
const newDatePicker = document.querySelector('#datePicker');
const x = document.getElementById('error');

tasks.load();
tasks.render();

const addTaskButton = document.getElementById("addTaskButton");

const userInput = (e) => {
    e.preventDefault();
    
    const taskName = newTaskNameInput.value;
    const description = newTaskDescripInput.value;
    const assigned = newAssignedToInput.value;
    const dueDate = newDatePicker.value;

    if (taskName === "" || description === "" || assigned === "" || dueDate === "") {
        x.classList.remove('invisible');
        x.classList.add('visible');
        document.getElementById('myForm').reset();
    } 
    
    else {
        x.classList.add('invisible');
        tasks.addTask(taskName, description, assigned, dueDate);
        tasks.render();
        tasks.save();
    };

    document.getElementById('myForm').reset();

};

const taskList = document.querySelector('#tasksList');


taskList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {

        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        let task = tasks.getTaskById(taskId);
        

        task.status = "Done";
        
        if (task.status === 'Done') {

            event.target.classList.remove('visible');
            event.target.classList.add('invisible');

        }

        tasks.render();
        tasks.save();
        
    }


    if (event.target.classList.contains("delete-button")) {
        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        
        document.getElementById('tasksList').innerHTML = '';
        tasks.deleteTask(taskId);
        tasks.save();
        tasks.render();
    }

});


