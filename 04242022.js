// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

// function aspectRatio(x,y){
//   x = Math.ceil(y*16/9)
//   return [x, y]
// }

// let aspectRatio = (x, y) => {
//   x = Math.ceil(y*16/9)
//   return [x, y]
// }

const aspectRatio = (x, y) => [Math.ceil(y*16/9), y]

aspectRatio(374, 280)

// P: X (width) and Y (height) integers.
// R: Return the integers. Keep Y the same, and make X = 16:9 ratio (X:Y)
// E: (374, 280) -> 500, 280
// P: Using the provided integers, multiply Y by 16/9, round up, and use that value to replace X. Return (X, Y).