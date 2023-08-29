// Write a prototype method that extracts nested object values.

Object.prototype.hash = function (str) {
  const arr = str.split(".");
  return arr.reduce((pv, cv) => (pv ? pv[cv] : pv), this);
};

const obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

console.log(obj.hash("person.name"), "joe");
console.log(obj.hash("person.history.bio"), { funFact: "I like fishing." });
console.log(obj.hash("person.history.homeStreet"), undefined);
console.log(obj.hash("person.animal.pet.needNoseAntEater"), undefined);

// An string representing the nested directory into an object.
// Return the value of that directory, or undefined if the directory is invalid.