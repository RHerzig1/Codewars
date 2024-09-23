-- Combine two tables.

SELECT firstname, lastname, city, state
FROM Person
LEFT JOIN Address ON Person.personId = Address.personId;

-- https://leetcode.com/problems/combine-two-tables/