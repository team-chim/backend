SELECT `StudentID`, `Year`, `CompanyID`, C.`NameEN`, C.`NameTH`, `BranchName`, `StartDate`, `EndDate`, `PositionNameEN`, `PositionNameTH`, `Comment`, `Rating`, `OfferID`, `HasOverdueReport`, `Status`
FROM eng_official_internship
NATURAL JOIN internship I
NATURAL JOIN company C
WHERE StudentID = ?
LIMIT 1; -- Assume for now that one official internship per student only