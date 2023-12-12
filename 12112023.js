// Write a class for a block, that takes width, length, and height, and returns volume and surface area.

class Block {
  constructor(arr) {
    [this.width, this.length, this.height] = arr;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    return (this.width * this.height + this.length * this.height + this.width * this.length) * 2;
  }
}

let block = new Block([2, 4, 6]);
console.log(block.getWidth(), 2);
console.log(block.getLength(), 4);
console.log(block.getHeight(), 6);
console.log(block.getVolume(), 48);
console.log(block.getSurfaceArea(), 88);

// An array of three positive integers. Always valid numbers.
// Write methods inside the class to return each dimension, as well as the volume and surface area.