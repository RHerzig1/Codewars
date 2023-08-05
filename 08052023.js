// Write a function that returns the last Josephus survivor.

function josephusSurvivor(max, interval) {
  const arr = [...Array(max).keys()];
  let index = 0;

  while (arr.length > 1) {
    index = (--index + interval) % arr.length;
    arr.splice(index, 1);
  }

  return arr[0] + 1;
}

console.log(josephusSurvivor(7, 3), 4);
console.log(josephusSurvivor(24, 8), 10);
console.log(josephusSurvivor(130, 43), 32);

// Two integers > 0. First represents the number of people and the second represents which person (by count) is removed from the circle.
// Return a number indicating the last person in the circle.

// Declare an array of [1, ..., max].
// Delacre an index = 0.
// While the array.length is > 1, remove each element the interval lands on.
// Return the last element.
