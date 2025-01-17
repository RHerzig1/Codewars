-- Query the last person who can fit on the bus.

WITH cte AS (
    SELECT
        person_id,
        person_name,
        weight,
        turn,
        SUM(weight) OVER(ORDER BY turn) AS running_weight
    FROM
        queue
), cte2 AS (
    SELECT
        ROW_NUMBER() OVER(ORDER BY turn DESC) AS rank,
        person_id,
        person_name,
        weight,
        turn,
        running_weight
    FROM
        cte
    WHERE
        running_weight <= 1000
    ORDER BY
        turn DESC
)

SELECT
    person_name
FROM
    cte2
WHERE
    rank = 1;
    
-- https://leetcode.com/problems/last-person-to-fit-in-the-bus