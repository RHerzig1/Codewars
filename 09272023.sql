-- Write a query that returns a list of products and the quantity they sold during the first year of their release.

SELECT
  product_id,
  YEAR AS first_year,
  quantity,
  price
FROM
  sales
WHERE
  (product_id, YEAR) IN (
    SELECT
      product_id,
      MIN(YEAR)
    FROM
      sales
    GROUP BY
      product_id
  )

  /*
Input: 
Sales table:
+---------+------------+------+----------+-------+
| sale_id | product_id | year | quantity | price |
+---------+------------+------+----------+-------+ 
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |
+---------+------------+------+----------+-------+

Output: 
+------------+------------+----------+-------+
| product_id | first_year | quantity | price |
+------------+------------+----------+-------+ 
| 100        | 2008       | 10       | 5000  |
| 200        | 2011       | 15       | 9000  |
+------------+------------+----------+-------+
   */
  /*
   
   */