// Creating array of strings - tasks
const tasks = ['25', '31', '42', '77'];

// Create an addTask function
const addTask = (task) => {
    // push the task to the array
    tasks.push(task)

    // print message to console indicating the insertion
    console.log('new task has been inserted to array.')

    // return the number of elements in the array after the insertion
    return tasks.length
}
// Run function add Task
addTask('2')

// Create a listAllTasks function
const listAllTasks = () => {

    //iterate over each item in tasks
    for (item in tasks) {

        // print each task in tasks
        console.log(tasks[item])
    }
}
// run function
listAllTasks()

// Create a deleteTask function
const deleteTask = (task) => {
    // get index of item in array
    let index = tasks.indexOf(task);
    
    // splice task from list of tasks
    let removedItem = tasks.splice(index, 1);

    // print to console
    console.log(task + ' has been removed from list');

    // return length of array tasks
    return tasks.length
}
// run function
deleteTask('77');
