// Write a function that organizes a list of items by recyclable materials.

function recycle(arr) {
  const cache = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  for (const { type, material, secondMaterial } of arr) {
    if (cache[material]) {
      cache[material].push(type);
    }
    if (cache[secondMaterial]) {
      cache[secondMaterial].push(type);
    }
  }

  return Object.values(cache);
}

let input = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

let output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"],
];

console.log(recycle(input), output);

// An array of objects. Each object has a type and material property. Some have a secondMaterial property. All valid strings and the materials match a entry from the materials list.
// Return an array of arrays. Each nested array represents a material (in order) and contains an item that uses that material as either it's "material" or "secondMaterial" property.

// Delcare a cache of materials.
// Iterate through the parameter and add the items to the cache.
// Return the values of the cache.
