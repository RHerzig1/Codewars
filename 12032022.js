// Calculate minimum taxi cost to get to train station

function calculateOptimalFare(D, T, V1, R, V2) {
  T = T / 60
  const walk = V2 * T
	if (walk >= D) return "0.00"
	if (V1 * T < D) return "Won't make it!"
	return ((R * V1 * (D - walk)) / (V1 - V2)).toFixed(2)
}

calculateOptimalFare(8, 10, 90, 2, 6) // "15.00"

// D distance km
// T minutes before the train leaves
// V1 taxi speed km/h
// R cost / km
// V2 walk speed km/h (free)
// Return the lowest possible cost to get to the train station, combining taxi and walking.

// Check if student can make it at all. If not, return "Won't make it!".
// Otherwise, calculate lowest possible price.

// Multiple V1 and V2 by 60 to get minutes.