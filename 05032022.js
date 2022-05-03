// Create a constructor that creates a ship object and tests if the draft is greater than 20.

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function() {
    return (this.draft - (this.crew * 1.5) > 20)
  }
}

const titanic = new Ship(15, 10);

// P: A new object Ship(draft, crew).
// R: Calculate if draft is more than 20. If so, return true
// E: new Ship(15, 10) -> false
// P: Each crew equals 1.5 draft. Using a method, calculate the draft - crew * 1.5. If the result is more than 20, return true.