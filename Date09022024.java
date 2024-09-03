
// Calculate how far a snail can travel within a year.

public class Date09022024 {

    public static boolean canSnailReachEnd(double length, double speed, double lengthIncreases) {
        double distance = 0;
        double minutes = 0;

        while (minutes < 525600) {
            distance += speed;
            distance += lengthIncreases;
            minutes += 1;

            if (distance >= length) {
                return true;
            }
        }

        return false;
    }
}

// System.out.println(canSnailReachEnd(10, 2, 1), true);
// System.out.println(canSnailReachEnd(100, 1, 2), false);
// System.out.println(canSnailReachEnd(100000, 0.1, 0.05), true);

// length: double. Initial length of rubber band. 0.01 ≤ x ≤ 1,000,000.
// speed: double. Constant speed of snail per minute. 0.01 ≤ y ≤ 1,000,000.
// lengthIncreases: double. Rate of length increase for the rubber band per minute. 0.01 ≤ z ≤ 1,000,000.
// Return true or false, whether the snail can reach the end of the rubber band within a year (525600 minutes).
