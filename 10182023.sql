-- Write a query that delete duplicate email addresses from a list, saving only the one with the minimum id.

DELETE
  p1
FROM
  Person p1,
  Person p2
WHERE
  p1.email = p2.email
  AND p1.id > p2.id;

/*
 Input: 
 Person table:

 +----+------------------+
 | id | email            |
 +----+------------------+
 | 1  | john@example.com |
 | 2  | bob@example.com  |
 | 3  | john@example.com |
 +----+------------------+

 Output: 
 +----+------------------+
 | id | email            |
 +----+------------------+
 | 1  | john@example.com |
 | 2  | bob@example.com  |
 +----+------------------+

 Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.
 */
/*
 
 */