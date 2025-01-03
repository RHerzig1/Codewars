-- Query monthly transactions per month per country.

WITH cte AS (
    SELECT
        delivery_id,
        customer_id,
        order_date,
        customer_pref_delivery_date,
        CASE order_date
            WHEN customer_pref_delivery_date THEN 1
            ELSE 0
        END AS order_type,
        CASE order_date
            WHEN MIN(order_date) OVER(PARTITION BY customer_id) THEN 'Y'
            ELSE 'N'
        END AS first_order
    FROM
        delivery
)

SELECT
    ROUND(AVG(order_type) * 100, 2) AS immediate_percentage
FROM
    cte
WHERE
    first_order = 'Y';

-- https://leetcode.com/problems/monthly-transactions-i