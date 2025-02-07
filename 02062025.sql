-- Query the second highest distinct salary.

WITH cte AS (
    SELECT
        DENSE_RANK() OVER(ORDER BY salary) AS rank,
        id,
        salary
    FROM
        employee
)

SELECT
    MAX(salary) AS SecondHighestSalary 
FROM
    cte
WHERE
    rank = 2;

-- https://leetcode.com/problems/second-highest-salary