SELECT c.NameEN, o.`Year`, o.OfferID, o.PositionNameEN, o.PositionNameTH, o.PositionDescriptionEN, o.PositionDescriptionTH
FROM internship_offer o 
NATURAL LEFT JOIN company c
WHERE c.`CompanyID` = ?
  AND o.`Year` = ? 
  AND o.`OfferID` = ?
LIMIT 1;