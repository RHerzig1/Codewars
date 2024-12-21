-- Count the customers who visited but didn't purchase.

SELECT customer_id, count(customer_id) AS count_no_trans
FROM visits v
WHERE NOT EXISTS (
    SELECT visit_id
    FROM transactions t
    WHERE v.visit_id = t.visit_id
)
GROUP BY customer_id;

-- https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions