SELECT `StudentID`, `Year`, `CompanyID`, `BranchName`, R.Number, R.Date, R.Hours
FROM eng_official_internship
NATURAL JOIN company C
NATURAL JOIN report R
WHERE StudentID = ?
  AND R.Number = ?;