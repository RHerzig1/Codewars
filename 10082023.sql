-- Write a query that returns the a count of each salary catagory.

SELECT
  "Low Salary" AS category,
  SUM(income < 20000) AS accounts_count
FROM
  Accounts
UNION
SELECT
  "Average Salary" AS category,
  SUM(income >= 20000 AND income <= 50000) AS accounts_count
FROM
  Accounts
UNION
SELECT
  "High Salary" AS category,
  SUM(income > 50000) AS accounts_count
FROM
  accounts;

/*
Input: 
Accounts table:
+------------+--------+
| account_id | income |
+------------+--------+
| 3          | 108939 |
| 2          | 12747  |
| 8          | 87709  |
| 6          | 91796  |
+------------+--------+

Output: 
+----------------+----------------+
| category       | accounts_count |
+----------------+----------------+
| Low Salary     | 1              |
| Average Salary | 0              |
| High Salary    | 3              |
+----------------+----------------+

Explanation: 
Low Salary: Account 2.
Average Salary: No accounts.
High Salary: Accounts 3, 6, and 8.
 */
/*
 Use the union operator.
 */