-- Query users with valid emails.

SELECT
    user_id,
    name,
    mail
FROM
    users
WHERE
    REGEXP_LIKE(mail, '^[[:alpha:]]+[[:alnum:]|_|.|-]*@leetcode[.]com$');
    
-- https://leetcode.com/problems/find-users-with-valid-e-mails