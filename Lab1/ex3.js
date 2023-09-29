// Starting Task 3

// Creating array of strings
const tasks = ['25', '31', '42', '77'];

// Create an addTask function
const addTask = (task) => {
    // adds the task to the array
    tasks.push(task)

    // print message to console indicating the insertion
    console.log('new task has been inserted to array.')

    //return the number of elements in the array after the insertion
    return tasks.length
}
addTask('2')

// Create a listAllTasks function
const listAllTasks = () => {

    //iterate over each item in tasks
    for (item in tasks) {

        // print each task in tasks
        console.log(tasks[item])
    }
}
listAllTasks()

// Create a deleteTask function
const deleteTask = (task) => {
    let index = tasks.indexOf(task);
    let removedItem = tasks.splice(index, 1);

    console.log(task + ' has been removed from list');

    return tasks.length
}

deleteTask('77');

// Finished Task 3