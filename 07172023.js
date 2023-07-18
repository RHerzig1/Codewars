// Write a function that determines whether the nested structure of two arrays are identical.

Array.prototype.sameStructureAs = function (other, result = true) {
  if (result === false) {
    return false;
  }

  if (other.every((elem) => Array.isArray(elem) === false)) {
    return other.length === this.length;
  }

  for (let i = 0; i < elem.length; i++) {
    if (Array.isArray(other[i]) === true && Array.isArray(this[i]) === true) {
      return this[i].sameStructureAs(other[i]);
    } else if (
      Array.isArray(other[i]) === true ||
      Array.isArray(this[i]) === true
    ) {
      return false;
    }
  }

  return true;
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2]), true);

// Base case:
// If there are no arrays, return arr.length = this.length
// Recursive case:
// For each array, call this function
