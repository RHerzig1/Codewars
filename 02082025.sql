-- Query the products with at least 100 units ordered in February 2020.

SELECT
    product_name,
    SUM(unit) AS unit
FROM
    orders
LEFT JOIN
    products
ON
    orders.product_id = products.product_id
WHERE
    order_date BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY
    product_name
HAVING
    SUM(unit) >= 100;

-- https://leetcode.com/problems/list-the-products-ordered-in-a-period