// Extend the Array class to include a method that takes an array and returns true if every element is present in the current array

Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    const cache = {};

    for (const elem of this) {
      cache[elem] = true;
    }

    for (const elem of a) {
      if (!cache[elem]) return false;
    }

    return true;
  },
});

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([1, 2, 3, 4, 5]), true);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([12, 15]), false);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([]), true);