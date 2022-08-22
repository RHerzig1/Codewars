// Create class with random color property.
// The Ghost class should have a color property that outputs a random color: white, yellow, purple, or red.

class Ghost {
  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red']
    }
  get color() {
    const randomNumber = Math.floor(Math.random() * this.colors.length)
    return this.colors[randomNumber]
  }
}

// There are no parameters for the class.
// The color property must output a color at random.
// Create a Ghost class.
// Add a colors property with the requested color options in the array.
// Add a get color() method that picks a random number from 0 - 3, and uses that to return an index from the previous array.