// Libraries
const { create } = require('domain');
const fs = require('fs'); // file system
const { describe } = require('yargs');

const readAllTask = () => {
    const buffer = fs.readFileSync("task.json");
    // Convert to string
    const taskString = buffer.toString();
    // Convert to JSON
    const taskJSON = JSON.parse(taskString);
    return taskJSON;
};

const createTask = (title, description) => {
    const newTask = {
        id : Math.random().toString(),
        title,
        description,
    }
    let taskList = readAllTask();
    // taskList.push(newTask);
    taskList = [...taskList, newTask];
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
};

const readDetailTask = (id) => {
    // Get the taskList
    let taskList = readAllTask();
    const task = taskList.find((task) => id === task.id);
    return task;
};

const updateTask = (id, title, description) => {
    let taskList = readAllTask();
    // return -1 if not found
    const index = taskList.findIndex((task) => id === task.id);
    if (index !== -1){
        const oldTask = taskList[index];
        const newTask = {...oldTask, title, description}; //Overwrite
        taskList[index] = newTask;
        fs.writeFileSync("task.json", JSON.stringify(taskList));
        return newTask;
    }
    else{
        return false;
    }
}

const deleteTask = (id) => {
    let taskList = readAllTask();
    const taskIndex = taskList.findIndex((task) => id === task.id);
    if (taskIndex !== -1){
        const task = taskList[taskIndex];
        taskList = taskList.filter((task) => task.id !== id);
        fs.writeFileSync("task.json", JSON.stringify(taskList));
        return task;
    }
    else {
        return false;
    }
} 

module.exports = {
    readAllTask,
    createTask,
    readDetailTask,
    updateTask,
    deleteTask
}