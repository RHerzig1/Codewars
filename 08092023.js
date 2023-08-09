// Write a function that converts a string to NATO.

function toNato(str) {
  const strNoSpaces = str.replace(/\s/g, "");
  const nato = strNoSpaces
    .split("")
    .map((letter) => NATO[letter.toLowerCase()] || letter)
    .join(" ");
  return nato;
}

const NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu",
};

console.log(
  toNato("Hello world"),
  "Hotel Echo Lima Lima Oscar Whiskey Oscar Romeo Lima Delta"
);
console.log(
  toNato("Hello, world!"),
  "Hotel Echo Lima Lima Oscar , Whiskey Oscar Romeo Lima Delta !"
);

// A string containing words seperated by a space. May be empty. May include punctuation.
// Return the string with each letter converted to it's NATO alternative. Keep puncuation. Every word should be seperated by a single space.

// Remove all spaces from the string.
// Iterate through it. For each letter, return the NATO version instead.
// Join and return the result.
