-- Write a query that returns the a list of each employee and their primary department.

SELECT
  x,
  y,
  z,
  IF(
    x + y > z
    AND y + z > x
    AND z + x > y,
    "Yes",
    "No"
  ) AS triangle
FROM
  triangle;

/*
Input: 
Triangle table:
+----+----+----+
| x  | y  | z  |
+----+----+----+
| 13 | 15 | 30 |
| 10 | 20 | 15 |
+----+----+----+

Output: 
+----+----+----+----------+
| x  | y  | z  | triangle |
+----+----+----+----------+
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |
+----+----+----+----------+

 */
/*
 Use the IF function and the Triangle Inequality Theorem to determine whether the sides create a valid triangle.
 */