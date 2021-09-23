const addTaskButton = document.getElementById("addTask");

const newTaskNameInput = document.querySelector('#taskName');
const taskName = newTaskNameInput.value;
console.log("Task name: " + taskName);

const newTaskDescripInput = document.querySelector('#taskDescrip');
const description = newTaskDescriptionInput.value;
console.log("Task description: " + description);


const newAssignedTo = document.querySelector('#assignedTo');
const assigned = newAssignedToInput.value;
console.log("Assigned To: " + assigned);


const newDatePicker = document.querySelector('#datePicker');
const date = newDatePicker.value;
console.log("Date: " + date);

document.getElementById('myForm').reset();

let x = document.getElementById('error');

if (taskName === "") {

    x.style.display = 'block';

} 
else {

    x.style.display = 'none';
    document.getElementById('myForm').reset();

};











































// const errorElement = document.getElementById('error');


// addTaskButton.addEventListener('submit', (e) => {

//     let messages = []

//     if (taskName.value === '' || taskName.value == null) {

//         messages.push('Task name is required');

//     } 
//     if (taskDescrip.value === '' || taskDescrip.value == null) {

//         messages.push('Task Description is required.');

//     } 
//     if (assignedTo.value === '' || assignedTo.value == null) {

//         messages.push('Assigned to is a required field.'); 

//     } 
//     if (datePicker.value === '' || datePicker.value == null) {

//         messages.push('A date is required');

//     }
//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ');
//     }
// })
