// Write a function that uses closures to create increment, decrement, and reset methods for a number.

function createCounter(init) {
  let initialInit = init;

  function increment() {
    return ++initialInit;
  }

  function decrement() {
    return --initialInit;
  }

  function reset() {
    return (initialInit = init);
  }

  return { increment, decrement, reset };
}

let counter1 = createCounter(0);
let counter2 = createCounter(0);
console.log(counter1.increment(), 1);
console.log(counter1.increment(), 2);
console.log(counter1.increment(), 3);
console.log(counter1.increment(), 4);
console.log(counter1.reset(), 0);
console.log(counter1.decrement(), -1);
console.log(counter1.decrement(), -2);
console.log(counter2.decrement(), -1);
console.log(counter1.increment(), -1);
console.log(counter1.reset(), 0);
