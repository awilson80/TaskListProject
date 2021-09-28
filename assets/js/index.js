const tasks = new TaskManager();

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
    document.getElementById('myForm').reset();
    console.log(tasks);

};

const taskList = document.querySelector('.tasksList');


taskList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {

        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id")); // parentTask or tasksList?
        // console.log(taskId);
        let task = tasks.getTaskById(taskId);
        

        task.status = "DONE";
        
        if (task.status === 'DONE') {

            event.target.classList.remove('visible');
            event.target.classList.add('invisible');

        }

        tasks.render();
        
        // console.log(parentTask)
        // console.log(task)
        
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


