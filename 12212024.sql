-- Return the IDs with a temperature higher than the previous day's.

SELECT customer_id, count(customer_id) AS count_no_trans
FROM visits v
WHERE NOT EXISTS (
    SELECT visit_id
    FROM transactions t
    WHERE v.visit_id = t.visit_id
)
GROUP BY customer_id;

-- https://leetcode.com/problems/rising-temperature