-- Write a query that returns the ID, NAME, and index of a comma from another table.

SELECT
  id,
  NAME,
  position(',' IN characteristics) AS comma
FROM
  person
ORDER BY
  comma;

/*
PERSON table:
- ID
- NAME
- AGE
- CHARACTERISTICS

Output:
- ID
- NAME
- Index of comma in CHARACTERISTICS as COMMA
*/

-- PERSON table will always have a CHARACTERISTICS value with one comma.
-- Use the POSITION() function to include the index of that comma in the output.