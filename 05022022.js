// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated. If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

class Ball {
  constructor(ballType) {
    this.ballType = (ballType || 'regular')
  }
}

let ball1 = new Ball()

// P: Create a class with one parameter for "ballType". If no argument is given, then return a ball type of 'regular'.
// R: If no argument is given, then return a ballType of 'regular'.
// E: ball1.ballType -> "regular"
//    ball2.ballType -> "super"
// P: Using the class constuctor, create a class with a single 'this.ballType' property. Set a default value of 'regular'.