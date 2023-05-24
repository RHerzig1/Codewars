// Write a function the returns the indexes of all capital letters of a string

function capitals(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result.push(i);
    }
  }

  return result;
}

console.log(capitals("HellO WorLD"), [0, 4, 6, 9, 10]);
console.log(capitals("hello world"), []);

// A string of words. Letters may be uppercase or lowercase.
// Return an array of indexes indicated the capital letters.