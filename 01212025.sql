-- Query for a running 7 day sum and average of product sold.

WITH cte AS (
    SELECT
        visited_on,
        SUM(amount) AS amount
    FROM
        customer
    GROUP BY
        visited_on
), cte2 AS (
    SELECT
        TO_CHAR(visited_on, 'YYYY-mm-dd') AS visited_on,
        SUM(amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
        ROUND(AVG(amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW), 2) AS average_amount
    FROM
        cte
    ORDER BY
        visited_on
)

SELECT
    visited_on,
    amount,
    average_amount
FROM
    cte2
WHERE
    visited_on >= 6 + (
        SELECT
            MIN(visited_on)
        FROM
            customer
    )
ORDER BY
    visited_on;

-- https://leetcode.com/problems/restaurant-growth