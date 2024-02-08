-- Write a script that queries department sales using an EXISTS operator.

SELECT
  id,
  NAME
FROM
  departments d
WHERE
  EXISTS (
    SELECT
      department_id,
      NAME
    FROM
      sales s
    WHERE
      s.department_id = d.id
      AND price > 98
  );