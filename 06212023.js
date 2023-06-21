// Write a function that returns the life of an evaporator containing a gas.

function evaporator(rate, threshold) {
  let count = 0;
  let percent = 100;

  while (percent >= threshold) {
    percent -= (percent * rate) / 100;
    count++;
  }

  return count;
}

console.log(evaporator(5, 1), 90);
console.log(evaporator(10, 10), 22);
console.log(evaporator(10, 15), 19);

// The percentage rate at which gas is lost per day and the percentage threshold of when the gas ineffective. Both integers greater than 0.
// Return the number of days it takes for the gas to become ineffective.

// Delare a count variable for the number of days.
// Declare a percentage variable for the status of the gas.
// While that percentage it greater than the threshold, subtract the daily losses and count each day.
// Return the count.
