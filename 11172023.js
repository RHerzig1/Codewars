// Write a function that sorts an array of playing cards.

function sortCards(arr) {
  const ref = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
  return arr.sort((a, b) => ref.indexOf(a) - ref.indexOf(b));
}

console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"]), ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"]);

// An array of playing cards. Length => 1. Always valid inputs.
// Sort the cards into this order: ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'].

// Declare the order.
// Reference that in the sort parameters.
