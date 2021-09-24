const addTaskButton = document.getElementById("addTaskButton");

const task1 = new TaskManager('Lulu', 'I forgot', 'What is next', 'Dawg', 'now'); // placeholder

const userInput = () => {

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
    const date = newDatePicker.value;
    console.log("Date: " + date);

    document.getElementById('myForm').reset();

    let x = document.getElementById('error');

    if (taskName === "") {

        x.style.display = 'block';

    } else {

        x.style.display = 'none';
        document.getElementById('myForm').reset();

    };

};

// addTaskButton.onclick = userInput();
