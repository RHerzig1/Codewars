// Add functions to the Array prototype.

Object.assign(Array.prototype, {
  even() {
    return this.filter((value) => {
      if (!Number.isInteger(value)) {
        return false;
      }

      return value % 2 === 0;
    });
  },
  odd() {
    return this.filter((value) => {
      if (!Number.isInteger(value)) {
        return false;
      }

      return value % 2 === 1;
    });
  },
  under(limit) {
    return this.filter((value) => {
      if (!Number.isInteger(value)) {
        return false;
      }

      return value < limit;
    });
  },
  over(limit) {
    return this.filter((value) => {
      if (!Number.isInteger(value)) {
        return false;
      }

      return value > limit;
    });
  },
  inRange(lower, upper) {
    return this.filter((value) => {
      if (!Number.isInteger(value)) {
        return false;
      }

      return value >= lower && value <= upper;
    });
  },
});

console.log([1, 2, 3, 4, 5].even(), [2, 4]);
console.log([1, 2, 3, 4, 5].odd(), [1, 3, 5]);
console.log([1, 2, 3, 4, 5].under(4), [1, 2, 3]);
console.log([1, 2, 3, 4, 5].over(4), [5]);
console.log([1, 2, 3, 4, 5].inRange(1, 3), [1, 2, 3]);
console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30), [18, 20, 22, 30]);
console.log(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(), [300, 122]);

// Even: Return only even elements from the array.
// Odd: Return only odd elements from the array.
// Under: Return elements less than the provided value.
// Over: Return elements greater than the provided value.
// InRange: Return elements within the bounds of the provided values.

// If strings or floats are passed in, filter them out.
