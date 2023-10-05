-- Write a query that returns the a list of numbers that appear three times consecutively.

SELECT
  DISTINCT l1.num AS ConsecutiveNums
FROM
  logs l1,
  logs l2,
  logs l3
WHERE
  l2.id = l1.id + 1
  AND l2.num = l1.num
  AND l3.id = l1.id + 2
  AND l3.num = l1.num;

/*
Input: 
Logs table:
+----+-----+
| id | num |
+----+-----+
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |
+----+-----+

Output: 
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+

Explanation: 1 is the only number that appears consecutively for at least three times.
 */
/*

 */