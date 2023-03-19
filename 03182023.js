// Write an algorithm that filters and sorts matching elements from two arrays.

function inArray(arr1, arr2) {
  return arr1
    .filter((substr) => arr2.some((str) => str.includes(substr)))
    .sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["live", "strong"])
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]), [])

// Two arrays containing strings.
// Return sorted array1 containing only strings that are included in arr2. If no strings are included, return an empty array.

// Filter arr1 to get elements that are only present in arr2.
// Sort lexigraphically and return.