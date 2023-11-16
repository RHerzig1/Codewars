// Write an asynchronous function the sleeps for the provided number of milliseconds.

async function sleep(millis) {
  await new Promise((_) => setTimeout(_, millis));
}

let time = Date.now();
let difference = sleep(100).then(() => console.log(Date.now() - time, 100));
difference = sleep(200).then(() => console.log(Date.now() - time, 200));
difference = sleep(300).then(() => console.log(Date.now() - time, 300));

// An integer. 0 < number > 500. Always a valid number.
// Create an asynchronous function that pauses for the number of milliseconds provided. It can return any value.