// Libraries

const yargs = require('yargs');
const fs = require('fs'); // file system - built in nodeJS
const {readAllTask, createTask, readDetailTask, updateTask, deleteTask} = require('./model/task.js') // Task.js Functions

// chalk library
const chalk = require('chalk');


yargs.command({
    command : "test",
    handler : () => {
        console.log("Chao cac ban");
    }
});

//CRUD

//Create
yargs.command({
    command : "create",
    builder : {
        title : {
            type : "string"
        }, 
        description : {
            type : "string"
        }
    },
    handler : (args) => {
        const { title, description } = args;
        const newTask = createTask( title, description );
        console.log("task is created", newTask);
    }
});

//Read All
yargs.command({
    command : "read-all",
    handler : () => {
        const result = readAllTask();
        console.log(result);
        console.log(chalk.blue('Doneeeeeee!'));
    }
});

//Read Detail
yargs.command({
    command : "read-detail",
    builder : {
        id : {
            type :  "string"
        }
    },
    handler : (args) => {
        const {id} = args;
        const task = readDetailTask(id);
        if (task) {
            console.log("Task: ", task);
        }
        else {
            console.log("Task is not existed");
        }
    }
});

//Update
yargs.command({
    command : "update",
    builder : {
        id : {
            type : "string"
        },
        title : {
            type : "string"
        },
        description : {
            type : "string"
        }
    },
    handler : (args) => {
        const {title} = args;
        const {description} = args;
        const {id} = args;
        const task = updateTask(id, title, description);
        if(task){
            console.log("Task is updated");
        }
        else{
            console.log("Task not found");
        }
    }
});

//Delete
yargs.command({
    command : "delete",
    builder : {
        id : {
            type : "string"
        }
    },
    handler : (args) => {
        const {id} = args;
        const task = deleteTask(id);
        if (task) {
            console.log("task is deleted");
        }
        else{
            console.log("task is not found");
        }
    }
});




// Save all the commands
yargs.parse();