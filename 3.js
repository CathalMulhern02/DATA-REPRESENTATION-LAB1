// A - Initialize an empty array to store tasks.
const tasks = [];

// B - Define a function to add a new task to the array.
const addTask = (task) => {
  // i)  Append the new task to the task list.
  tasks.push(task);
  // ii)  Inform the user that the task has been added successfully.
  console.log(`${task} has been added to your tasks!`);
  // iii)  Return the current count of tasks in the array.
  return tasks.length;
};

// C - Define a function to display all tasks in the array.
const listAllTasks = () => {
  // i)  Iterate through each task in the task list.
  tasks.forEach((task) => {
    // ii)  Output each task to the console.
    console.log(task);
  });
};

// D - Define a function to remove a task from the array.
const deleteTask = (task) => {
  // i)  Determine the position of the task to be removed within the array.
  const index = tasks.indexOf(task);
  // ii)  If the task exists, remove it from the array.
  if (index > -1) {
    tasks.splice(index, 1);
    // iii)  Confirm to the user that the task has been removed.
    console.log(`${task} has been deleted!`);
  } else {
    // iii)  If the task is not found, notify the user accordingly.
    console.log(`${task} not found in your tasks`);
  }
  // iv)  Return the updated count of tasks remaining in the array.
  return tasks.length;
};

// Add new tasks to the list
addTask("Work"); 
addTask("Eat");  
addTask("Sleep"); 

// Display all current tasks
listAllTasks(); 

console.log("\n"); // empty line for better separation

// Remove some tasks 
deleteTask("Eat");  
deleteTask("Sleep");

// Attempt to delete a non-existent task ("Run")
deleteTask("Run");