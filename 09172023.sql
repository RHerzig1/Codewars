-- Write a query that returns a list of products and their average selling price.

SELECT
  prices.product_id,
  IFNULL(ROUND((SUM(unitssold.units * prices.price) / SUM(unitssold.units)), 2), 0) AS average_price
FROM
  prices
  LEFT JOIN unitssold ON prices.product_id = unitssold.product_id
  AND unitssold.purchase_date BETWEEN prices.start_date
  AND prices.end_date
GROUP BY
  prices.product_id;

/*
 Input:
 
 Prices table:
 +------------+------------+------------+--------+
 | product_id | start_date | end_date   | price  |
 +------------+------------+------------+--------+
 | 1          | 2019-02-17 | 2019-02-28 | 5      |
 | 1          | 2019-03-01 | 2019-03-22 | 20     |
 | 2          | 2019-02-01 | 2019-02-20 | 15     |
 | 2          | 2019-02-21 | 2019-03-31 | 30     |
 +------------+------------+------------+--------+
 
 UnitsSold table:
 +------------+---------------+-------+
 | product_id | purchase_date | units |
 +------------+---------------+-------+
 | 1          | 2019-02-25    | 100   |
 | 1          | 2019-03-01    | 15    |
 | 2          | 2019-02-10    | 200   |
 | 2          | 2019-03-22    | 30    |
 +------------+---------------+-------+
 
 Output: 
 +------------+---------------+
 | product_id | average_price |
 +------------+---------------+
 | 1          | 6.96          |
 | 2          | 16.96         |
 +------------+---------------+
 
 Explanation: 
 Average selling price = Total Price of Product / Number of products sold.
 Average selling price for product 1 = ((100 * 5) + (15 * 20)) / 115 = 6.96
 Average selling price for product 2 = ((200 * 15) + (30 * 30)) / 230 = 16.96
 */
/*
 A Prices table and UnitsSold table. Both may contain duplicate products seperated by unique dates.
 Return distinct product_id and average_price in any order. Round to 2 decimal places.
 */