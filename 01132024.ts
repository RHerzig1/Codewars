// Write a function that returns an array of each product of Multiplicative Persistence of a number.

export function per(num: number): number[] {
  const products: number[] = [];

  while (num >= 10) {
    const product: number = [...String(num)].map(Number).reduce((a, c) => a * c, 1);
    products.push(product);
    num = product;
  }

  return products;
}

console.log(per(1), []);
console.log(per(10), [0]);
console.log(per(69), [54, 20, 0]);
console.log(per(277777788888899), [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]);

// An integer. 1 <= number <= 277777788888899;
// Return an array containing each product of Multiplicative Persistence.

// Multiplicative Persistence is the calculation which multiplies all the digits of a number by each other, repeating with the product until a single digit is obtained.
