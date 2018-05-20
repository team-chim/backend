SELECT `StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `Year`, `CompanyID`, C.`NameEN`, C.`NameTH`, `BranchName`, `StartDate`, `EndDate`, `PositionNameEN`, `PositionNameTH`, `Comment`, `Rating`, `OfferID`, `HasOverdueReport`, `Status`
FROM eng_official_internship
NATURAL JOIN internship I
NATURAL JOIN company C
NATURAL JOIN student S
WHERE `Year` = ?;