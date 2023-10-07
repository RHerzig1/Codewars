-- Write a query that returns the name of the last person on an elevator with a weight limit of 1000.

SELECT
  person_name
FROM
  queue
WHERE
  turn = (
    SELECT
      MAX(turn)
    FROM
      (
        SELECT
          q1.turn
        FROM
          queue q1
          INNER JOIN queue q2 ON q1.turn >= q2.turn
        GROUP BY
          q1.turn
        HAVING
          SUM(q2.weight) <= 1000
      ) AS table1
  );

/*
 Input: 
 Queue table:
 +-----------+-------------+--------+------+
 | person_id | person_name | weight | turn |
 +-----------+-------------+--------+------+
 | 5         | Alice       | 250    | 1    |
 | 4         | Bob         | 175    | 5    |
 | 3         | Alex        | 350    | 2    |
 | 6         | John Cena   | 400    | 3    |
 | 1         | Winston     | 500    | 6    |
 | 2         | Marie       | 200    | 4    |
 +-----------+-------------+--------+------+
 
 Output: 
 +-------------+
 | person_name |
 +-------------+
 | John Cena   |
 +-------------+
 
 Explanation: The folowing table is ordered by the turn for simplicity.
 +------+----+-----------+--------+--------------+
 | Turn | ID | Name      | Weight | Total Weight |
 +------+----+-----------+--------+--------------+
 | 1    | 5  | Alice     | 250    | 250          |
 | 2    | 3  | Alex      | 350    | 600          |
 | 3    | 6  | John Cena | 400    | 1000         | (last person to board)
 | 4    | 2  | Marie     | 200    | 1200         | (cannot board)
 | 5    | 4  | Bob       | 175    | ___          |
 | 6    | 1  | Winston   | 500    | ___          |
 +------+----+-----------+--------+--------------+
 */
/*
 Create a subtable 
 */