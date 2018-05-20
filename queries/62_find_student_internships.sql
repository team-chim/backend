SELECT I.StudentID, I.`Year`, I.Status, I.StartDate, I.EndDate, I.PositionNameEn, I.PositionNameTH, Q.IsOfficial, C.NameEN, C.NameTH, S.FnameEN, S.MnameEN, S.LnameEN, S.FnameTH, S.MnameTH, S.LnameTH 
FROM internship I
NATURAL JOIN company C
NATURAL JOIN student S
NATURAL JOIN (
	SELECT StudentID, COUNT(*) AS IsOfficial
	FROM eng_official_internship EI
	NATURAL JOIN company C
	NATURAL JOIN student S
    GROUP BY StudentID
) AS Q
WHERE S.StudentID = '5730123421';