-- Write a script that queries department sales using an IN operator.

SELECT id, name
FROM departments
WHERE id IN
  (SELECT department_id
   FROM sales
   WHERE price > 98);