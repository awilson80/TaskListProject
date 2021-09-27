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

    let x = document.getElementById('error');

    if (taskName === "" || description === "" || assigned === "" || dueDate === "") {

        x.style.display = 'block';

    } else {

        x.style.display = 'none';
        document.getElementById('myForm').reset();

    };

    
    tasks.addTask(taskName, description, assigned, dueDate);
    tasks.render();
    document.getElementById('myForm').reset();
    console.log(tasks);

};

const tasksList = document.querySelector('.tasksList');


tasksList.addEventListener('click', (event) => {

    console.log('Got it')
    if (event.target.classList.contains('done-button')) {

        let parentTask = event.target.parentNode.parentNode.parentNode.parentNode
        console.log(parentTask)
    }
});
