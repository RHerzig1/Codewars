// Write a function that returns a string of likes.

function likes(arr: string[]): string {
  const length = arr.length;

  if (length === 0) {
    return `no one likes this`;
  }

  if (length === 1) {
    return `${arr[0]} likes this`;
  }

  if (length === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  }

  if (length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }

  return `${arr[0]}, ${arr[1]} and ${length - 2} others like this`;
}

console.log(likes([]), "no one likes this");
console.log(likes(["Peter"]), "Peter likes this");
console.log(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
console.log(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
console.log(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this");

// arr: string[]. Array of English names. 0 <= arr.length <= 10;
// Return a string stating who likes the post.
