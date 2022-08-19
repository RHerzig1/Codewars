// Create an asychronous function
// Create a function that can call the helper function action() a specified number of times before the environment times out.

async function execute(action, nTimes){
  let task = []
  for(let i = 0; i < nTimes; i++){
    task.push(action());
  }
  await Promise.all(task)
}

// The parameter is action, a function, and nTimes, an integer.
// Run the function as many times as specified before the timer runs out.
// Declare an asynchronous function.
// Declare a task variable with a value of [].
// Create a for loop that iterates nTimes.
// For each iteration, push action() into the task array.
// Using the await keyword and the Promise.all() method, call task.