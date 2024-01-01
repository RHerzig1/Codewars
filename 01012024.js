// Write an Animal class that contains a toString() method.

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

const dog = new Animal("Lassie", "dog");
console.log(dog.toString(), "Lassie is a dog");
console.log(dog.name, "Lassie");

// The class will take "name" and "type" arguments. It will also contain a toString() method.
// `${name} is a ${type}`
