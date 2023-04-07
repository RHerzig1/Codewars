// Write a Node.js function that uses the child process module to asynchronously runs a Bash command in a linux environment.

const { exec } = require("child_process");

function execute(command, callback) {
  const output = exec(command, (err, res) => {
    if (err) {
      callback(new Error(err))
    }
    else {
      callback(null, res)
    }
  });
}

// Command is a string, callback is a function.
// Return the result of the command or an error.

// Import exec from child_process.
// Call exec(). Pass in the command, and a callback function to handle errors.