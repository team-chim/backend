SELECT DISTINCT t1.`StudentID`, t1.`Year`, t1.`Semester`, t1.`PaymentStatus`
FROM (
    SELECT `StudentID`, `Year`, `Semester`, `PaymentStatus`
    FROM studies sd 
    NATURAL JOIN payment p
) AS t1 
WHERE t1.studentID = ?;