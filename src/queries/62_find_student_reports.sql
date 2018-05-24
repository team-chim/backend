SELECT `StudentID`, `Year`, `CompanyID`, `BranchName`, R.Number, R.Date, R.Hours , C.NameEN
FROM eng_official_internship
NATURAL JOIN company C
NATURAL JOIN report R
WHERE StudentID = ?;