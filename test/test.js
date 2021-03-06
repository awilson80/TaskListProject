const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const TaskManager = require('../assets/js/taskManager.js').TaskManager;

describe('Task manager methods', () => {
    
    describe('addTask', () => {
        it('should accept tasks as parameters and push them into newTask object', () => {
            // Set up
            const task = new TaskManager();

            // Exercise 
            task.addTask('Go outside', 'Go outside and play', 'Lulu', '12/25/12', 'To-do');
        
            // Verify
            assert.ok(task._tasks.length == 1);
        });

    });

    describe('deleteTask', () => {
        it('should delete tasks from the task manager', () => {
            // Set up
            const task = new TaskManager();

            // Exercise
            task.addTask('Go outside', 'Go outside and play', 'Lulu', '12/25/12', 'To-do');
            task.deleteTask(1);

            // Verify
            assert.ok(task._tasks.length === 0);
        });

    });

    describe('getTaskById', () => {
        it('should get a task based on the id', () => {
            // Set up
            const task = new TaskManager();
            task.addTask('Go outside', 'Go outside and play', 'Lulu', '12/25/12', 'To-do');

            // Exercise
            const testTask = task.getTaskById(1);

            // Verify
            assert.ok(testTask.id == 1);
        });

    });

});