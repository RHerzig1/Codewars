-- Write a script that queries large countries from a database.

SELECT
  NAME,
  population,
  area
FROM
  world
WHERE
  area >= 3000000
  OR population >= 25000000;

/*
 World table:
 +-------------+-----------+---------+------------+--------------+
 | name        | continent | area    | population | gdp          |
 +-------------+-----------+---------+------------+--------------+
 | Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
 | Albania     | Europe    | 28748   | 2831741    | 12960000000  |
 | Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
 | Andorra     | Europe    | 468     | 78115      | 3712000000   |
 | Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
 +-------------+-----------+---------+------------+--------------+
 Output: 
 +-------------+------------+---------+
 | name        | population | area    |
 +-------------+------------+---------+
 | Afghanistan | 25500100   | 652230  |
 | Algeria     | 37100000   | 2381741 |
 +-------------+------------+---------+
 */
/*
 A table of countries, including their area and population.
 Return the names of those countries, population, and area that are considered large.
 
 A country is large if it has an area of at least 3000000 or a population of at least 25000000.
 */