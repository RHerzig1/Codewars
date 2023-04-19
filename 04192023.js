// Write a function that filters strings from an array.

function filterNumbers(arr) {
  return arr.filter((elem) => typeof elem === "number");
}

console.log(filterNumbers([1, 2, "a", "b"]), [1, 2]);
console.log(filterNumbers([1, "a", "b", 0, 15]), [1, 0, 15]);
console.log(filterNumbers([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);

// An non-empty array containing positive numbers and strings.
// An array containing only the numbers from the parameter.

// Use the filter() function and typeof operator to return a new string containing only numbers.
