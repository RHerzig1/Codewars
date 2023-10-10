-- Write a query that returns the a list of students after swapping every two.

SELECT
  s1.id,
  IF(
    s1.id % 2 = 1,
    IFNULL(
      (
        SELECT
          student
        FROM
          seat s2
        WHERE
          s2.id = s1.id + 1
      ),
      student
    ),
    (
      SELECT
        student
      FROM
        seat s2
      WHERE
        s2.id = s1.id - 1
    )
  ) AS student
FROM
  seat s1;

/*
 Input: 
 Seat table:
 +----+---------+
 | id | student |
 +----+---------+
 | 1  | Abbot   |
 | 2  | Doris   |
 | 3  | Emerson |
 | 4  | Green   |
 | 5  | Jeames  |
 +----+---------+
 Output: 
 +----+---------+
 | id | student |
 +----+---------+
 | 1  | Doris   |
 | 2  | Abbot   |
 | 3  | Green   |
 | 4  | Emerson |
 | 5  | Jeames  |
 +----+---------+
 Explanation: 
 Note that if the number of students is odd, there is no need to change the last one's seat.
 */
/*
 
 */