const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let compid = req.body.compid || req.body.compId || req.body.companyId;
    let year = req.body.year  || req.body.Year; 
    let offerid = req.body.offerid || req.body.offerId;

    let positionNameEn = req.body.positionnameen || req.body.positionNameEn;
    let positionNameTh = req.body.positionnameth || req.body.positionNameTh;
    let positionDescriptionEn = req.body.positiondescriptionen || req.body.positionDescriptionEn;
    let positionDescriptionTh = req.body.positiondescriptionth || req.body.positionDescriptionTh
    let numberOfPosition = req.body.numberofposition || req.body.numberOfPosition;
    let otherRequirements = req.body.otherrequirements || req.body.otherRequirements;
    let statedMinimumGrade = req.body.statedminimumgrade || req.body.statedMinimumGrade;
    let statedSalary = req.body.statedsalary || req.body.statedSalary;
    let otherBenefits = req.body.otherbenefits || req.body.otherBenefits;
    let expiryDate = req.body.expirydate || req.body.expiryDate;

    let offerObj = {}

    if (positionNameEn) offerObj.PositionNameEN = positionNameEn;
    if (positionNameTh) offerObj.PositionNameTH = positionNameTh;
    if (positionDescriptionEn) offerObj.PositionDescriptionEN = positionDescriptionEn;
    if (positionDescriptionTh) offerObj.PositionDescriptionTH = positionDescriptionTh;
    if (numberOfPosition) offerObj.NumberOfPosition = numberOfPosition;
    if (otherRequirements) offerObj.OtherRequirements = otherRequirements;
    if (statedMinimumGrade) offerObj.StatedMinimumGrade = statedMinimumGrade;
    if (statedSalary) offerObj.StatedSalary = statedSalary;
    if (otherBenefits) offerObj.OtherBenefits = otherBenefits;
    if (expiryDate) offerObj.ExpiryDate = expiryDate;

    db.query(SQL.UPDATE_OFFER, [offerObj, compid, year, offerid], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(400).send({
                message: err.code
            })
        } else {
            res.sendStatus(202)
        }
    })


}