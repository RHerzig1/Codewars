-- Return the query quality and percentage poor.

SELECT
    q.query_name,
    ROUND(AVG(rating / position), 2) AS quality,
    NVL(ROUND(AVG(
        CASE WHEN rating < 3
            THEN 1
            ELSE 0
        END
    ) * 100, 2), 0) AS poor_query_percentage
FROM
    queries q
GROUP BY
    q.query_name;

-- https://leetcode.com/problems/queries-quality-and-percentage