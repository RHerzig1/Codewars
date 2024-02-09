-- Write a script that queries a database and returns the top 10 customers.

SELECT
  C .customer_id,
  email,
  COUNT(payment_id) AS payments_count,
  SUM(amount) :: FLOAT AS total_amount
FROM
  customer C
  LEFT JOIN payment p ON C .customer_id = p.customer_id
GROUP BY
  C .customer_id
ORDER BY
  SUM(amount) DESC
LIMIT
  10;