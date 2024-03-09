// Write a function that returns the elements with the minimum index sum between two arrays.

function findRestaurant(list1: string[], list2: string[]): string[] {
  const cache: { [property: string]: number } = {};

  for (let i = 0; i < list1.length; i++) {
    const list2Index = list2.indexOf(list1[i]);

    if (list2Index >= 0) {
      cache[list1[i]] = i + list2Index;
    }
  }

  let result: string[] = [];
  let minIndexSum: number = Number.MAX_SAFE_INTEGER;

  for (const property in cache) {
    if (cache[property] < minIndexSum) {
      result = [property];
      minIndexSum = cache[property];
    } else if (cache[property] === minIndexSum) {
      result.push(property);
    }
  }

  return result;
}

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]), ["Shogun"]);
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]), ["Shogun"]);
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]), ["sad", "happy"]);

// list1: string[]. Elements are unique and consist of upper and lower case letters and spaces. 1 <= list1.length <= 1000. 1 <= list1[i].length <= 30.
// list2: string[]. Elements are unique and consist of upper and lower case letters and spaces. 1 <= list2.length <= 1000. 1 <= list2[i].length <= 30.
// Return string[] of all words that have the minimum index sum. There will always be at least one common string betweent them.

// Iterate through list1.
// Use findIndex on list2 to find the index sum.
// Add it to the cache.
// Iterate the cache. Track the min values and push to a result array.
// Return the result.
