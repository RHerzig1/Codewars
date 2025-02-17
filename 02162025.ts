// Calculate how much Michael pays for a pizza.

function michaelPays(price) {
  if (price < 5) {
    return Math.round(price * 100) / 100;
  }

  const kate = Math.min((price * 1) / 3, 10);

  return Math.round((price - kate) * 100) / 100;
}

console.log(michaelPays(15), 10);
console.log(michaelPays(4), 4);
console.log(michaelPays(30), 20);
console.log(michaelPays(80), 70);
console.log(michaelPays(5.9181), 3.95);
console.log(michaelPays(28.789), 19.19);
console.log(michaelPays(4.325), 4.33);

// price: number. 0 <= number <= 100. May have up to 4 decimal digits.
// Return the price that Michael pays for the pizza, if it's split between the group. Round to the 2nd decimal place.
//   - If price < 5, Michael pays full price.
//   - Else, Kate contributes 1/3 of the price, but no more than 10.

// https://www.codewars.com/kata/5b043e3886d0752685000009
