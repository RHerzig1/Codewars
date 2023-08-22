// Write a function that extrapolates individual words from a string without spaces.

function getOrder(str) {
  const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];

  const cache = {};

  for (const item of menu) {
    const regEx = new RegExp(item.toLowerCase(), "g");
    const matches = str.match(regEx);

    if (matches) {
      cache[item] = matches.length;
    }
  }

  const result = [];

  for (const prop in cache) {
    let count = 0;

    while (count < cache[prop]) {
      result.push(prop);
      count++;
    }
  }

  return result.join(" ");
}

console.log(
  getOrder("burgerburgerfrieschickenchickencoke") ===
  "Burger Burger Fries Chicken Chicken Coke"
);
console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza") ===
  "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
);

// A string consisting of menu items. All lower case without spaces. No extra words or characters. Always valid.
// Return the menu items in order of the menu, seperated by a space with the first letter capitalized.

// Create a map object.
// Create a cache object.
// Iterate through the string and count the instance of each item. Add it to the cache.
// Create a results array.
// Iterate through the object and push each item to the array, repeating for multiple orders of the same item.
// Join and return.