// Write a function that returns the three most common words in a string.

function topThreeWords(text) {
  const arr = text
    .replace(/[^\w\s']|_/g, "")
    .toLowerCase()
    .split(" ")
    .filter((elem) => elem !== "" && elem !== "'");
  const cache = {};

  for (const word of arr) {
    cache[word] = cache[word] + 1 || 1;
  }

  return Object.entries(cache)
    .sort((a, b) => b[1] - a[1])
    .splice(0, 3)
    .map((elem) => elem[0]);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
  "e",
  "d",
  "a",
]);
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
  ["e", "ddd", "aa"]
);
console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"]
);

// A string of words seperated by spaces. May contain punctuation or mulitple spaces in a row.
// Return an array of the three most common words. Ignore all punctuation except apostrophes.

// Use regex to remove all unneeded puncuation.
// Split the string into an array of words.
// Declare a cache, iterate through the array, and cound the occurance of each element.
// Sort the result by property value and return the top 3 properties.