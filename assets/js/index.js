const tasks = new TaskManager();

tasks.load();
tasks.render();

const addTaskButton = document.getElementById("addTaskButton");

const userInput = (e) => {

    e.preventDefault();
    const newTaskNameInput = document.querySelector('#taskName');
    const taskName = newTaskNameInput.value;
    console.log("Task name: " + taskName);

    const newTaskDescripInput = document.querySelector('#taskDescrip');
    const description = newTaskDescripInput.value;
    console.log("Task description: " + description);


    const newAssignedToInput = document.querySelector('#assignedTo');
    const assigned = newAssignedToInput.value;
    console.log("Assigned To: " + assigned);


    const newDatePicker = document.querySelector('#datePicker');
    const dueDate = newDatePicker.value;
    console.log("Date: " + dueDate);

    
    tasks.addTask(taskName, description, assigned, dueDate);
    tasks.render();
    tasks.save();


    document.getElementById('myForm').reset();

};

const taskList = document.querySelector('.tasksList');


taskList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {

        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id")); // parentTask or tasksList?
        let task = tasks.getTaskById(taskId);
        

        task.status = "DONE";
        
        if (task.status === 'DONE') {

            event.target.classList.remove('visible');
            event.target.classList.add('invisible');

        }

        tasks.render();
        tasks.save();
        
    }


    if (event.target.classList.contains("delete-button")) {
        console.log('hello');
        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        console.log(parentTask);
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        tasks.deleteTask(taskId);
        tasks.save();
        tasks.render();

    }

    // Error alert stuff 

    const newTaskNameInput = document.querySelector('#taskName'); // Move these into global later lol
    const newTaskDescripInput = document.querySelector('#taskDescrip');
    const newAssignedToInput = document.querySelector('#assignedTo');
    const newDatePicker = document.querySelector('#datePicker');

    let x = document.getElementById('error');

    if (newTaskNameInput.input === "" || newTaskDescripInput.input === "" || newAssignedToInput.input === "" || newDatePicker.input === "") {
        x.style.display = 'block';
    } 
    
    else {
        x.style.display = 'none';
        document.getElementById('myForm').reset();
    };

});


