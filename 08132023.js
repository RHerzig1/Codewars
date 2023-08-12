// Write a function that reverses every other word of a string.

const reverse = (str) =>
  str
    .trim()
    .split(" ")
    .map((word, index) =>
      index % 2 === 1 ? [...word].reverse().join("") : word
    )
    .join(" ");

console.log(reverse("Hello World!"), "Hello !dlroW");
console.log(reverse("Reverse this longer string"), "Reverse siht longer gnirts");
console.log(reverse("    Reverse this longer string with whitespace     "), "Reverse siht longer gnirts with ecapsetihw");
console.log(reverse("   "), "");

// A string containing words seperate by spaces.
// Return the string with every other word reversed.

// Trim the string.
// Split it into an array.
// For every odd indexed word, reverse and return it.
// Else, just return the word.
// Join and return the string.