-- Query customer ids who bought all the products.

SELECT
    customer_id
FROM
    customer
CROSS JOIN
    (SELECT COUNT(product_key) AS total_product_count FROM product) tpc
GROUP BY
    customer_id, total_product_count
HAVING
    COUNT(distinct product_key) = total_product_count;

-- https://leetcode.com/problems/customers-who-bought-all-products/description