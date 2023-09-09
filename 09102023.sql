-- Write a script that queries from multiple sales tables using join.

SELECT
  product_name,
  YEAR,
  price
FROM
  sales
  LEFT JOIN product ON sales.product_id = product.product_id;

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
 
 Product table:
 +------------+--------------+
 | product_id | product_name |
 +------------+--------------+
 | 100        | Nokia        |
 | 200        | Apple        |
 | 300        | Samsung      |
 +------------+--------------+
 
 Output: 
 +--------------+-------+-------+
 | product_name | year  | price |
 +--------------+-------+-------+
 | Nokia        | 2008  | 5000  |
 | Nokia        | 2009  | 5000  |
 | Apple        | 2011  | 9000  |
 +--------------+-------+-------+
 
 Explanation: 
 From sale_id = 1, we can conclude that Nokia was sold for 5000 in the year 2008.
 From sale_id = 2, we can conclude that Nokia was sold for 5000 in the year 2009.
 From sale_id = 7, we can conclude that Apple was sold for 9000 in the year 2011.
 */
/*
 Two tables. One containing sales information and the other product information.
 Return product_name, year, and price for each sale_id in the Sales table.
 
 Use the join keyword to combine the two tables.
 */