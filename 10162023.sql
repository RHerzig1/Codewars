-- Write a query that returns a table with the names in Camel Casing.

SELECT
  user_id,
  CONCAT(
    UPPER(SUBSTRING(NAME, 1, 1)),
    LOWER(SUBSTRING(NAME, 2))
  ) AS NAME
FROM
  Users
ORDER BY
  user_id;

/*
 Input: 
 Users table:
 +---------+-------+
 | user_id | name  |
 +---------+-------+
 | 1       | aLice |
 | 2       | bOB   |
 +---------+-------+
 Output: 
 +---------+-------+
 | user_id | name  |
 +---------+-------+
 | 1       | Alice |
 | 2       | Bob   |
 +---------+-------+
 */
/*
 
 */