// Write a function that returns whether a given object fulfils the requirements to implement the "SantaClausable" interface.

function isSantaClausable(obj) {
  const sayHoHoHo = typeof obj.sayHoHoHo == "function";
  const distributeGifts = typeof obj.distributeGifts === "function";
  const goDownTheChimney = typeof obj.goDownTheChimney === "function";

  return [sayHoHoHo, distributeGifts, goDownTheChimney].every((elem) => elem === true);
}

const santa = {
  sayHoHoHo: () => {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: () => {
    console.log("Gifts for all!");
  },
  goDownTheChimney: () => {
    console.log("*whoosh*");
  },
};

const notSanta = {
  sayHoHoHo: () => {
    console.log("Oink Oink!");
  },
}

console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);

// An object. It may contain multiple properties that console log different messages.
// Return true or false indicating whether the object is meets the requirements to be a "SantaClausable" interface. This means it must have the three necessary functions, seen in the example.

// Test typeof for each method. They should all return 'function'.
// You cannot run each function since it'll through an error if it doesn't exist.