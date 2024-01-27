// Write a function that determines which page a user scrolls to.

function getSectionId(scroll: number, sizes: number[]): number {
  for (let i = 0; i < sizes.length; i++) {
    scroll -= sizes[i];

    if (scroll < 0) {
      return i;
    }
  }

  return -1;
}

console.log(getSectionId(100, [300, 200, 400, 600, 100]), 0);
console.log(getSectionId(300, [300, 200, 400, 600, 100]), 1);
console.log(getSectionId(650, [300, 200, 400, 600, 100]), 2);
console.log(getSectionId(10000, [300, 200, 400, 600, 100]), -1);

// scroll: number. 0 <= number <= 10000. Always a valid integer.
// sizes: number[]. 0 <= sizes.length <= 10. 0 <= elems <= 10000. Always valid array and integer elements.
// Return the screen that the user scrolls to. If none, return -1.