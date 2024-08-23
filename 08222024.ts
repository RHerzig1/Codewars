// Write a counter() function using closures.

function counter(): Function {
  let counter = 0;

  function increment() {
    return ++counter;
  }

  return increment;
}

const a = counter();
console.log(a(), 1);
console.log(a(), 2);
console.log(a(), 3);
console.log(a(), 4);
console.log(a(), 5);

const b = counter();
console.log(b(), 1);
console.log(a(), 6);
