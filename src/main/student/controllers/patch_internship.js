const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let stuid = req.params.stuid;
    let year = req.body.year  || req.body.Year; 
    let compid = req.body.compid || req.body.compId || req.body.companyId || req.body.companyID;
    let brid = req.body.brid || req.body.branch || req.body.branchName || req.body.branchname;

    let positionNameEn = req.body.positionnameen || req.body.positionNameEn;
    let positionNameTh = req.body.positionnameth || req.body.positionNameTh;
    
    let status = req.body.status || req.body.Status;
    let startDate = req.body.startDate || req.body.startdate;
    let endDate = req.body.endDate || req.body.enddate;

    let comment = req.body.comment || req.body.Comment;
    let rating = req.body.rating || req.body.Rating;

    let offerId = req.body.offerid || req.body.offerId || req.body.offerID;

    let internshipObj = {}

    if (positionNameEn) internshipObj.PositionNameEN = positionNameEn;
    if (positionNameTh) internshipObj.PositionNameTH = positionNameTh;

    if (status) internshipObj.Status = status;
    if (startDate) internshipObj.StartDate = startDate;
    if (endDate) internshipObj.EndDate = endDate;

    if (comment) internshipObj.Comment = comment;
    if (rating) internshipObj.Rating = rating;

    if (offerId) internshipObj.OfferID = offerId;
    else internshipObj.OfferID = null;

    db.query(SQL.UPDATE_INTERNSHIP, [internshipObj, stuid, year, compid, brid], (err, results, fields) => {
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