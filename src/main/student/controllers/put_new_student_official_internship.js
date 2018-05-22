const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB

    studentId = req.params.stuid

    let newEngOfficialInternship = {
        StudentID:      studentId,
        Year:           req.body.year || req.body.year,
        CompanyID:      req.body.companyId || req.body.compid || req.body.companyID,
        BranchName:     req.body.branchName || req.body.branchname,
    }
    let newInternship = {
        StudentID: req.params.stuid,
        Year: req.body.year || req.body.year,
        CompanyID: req.body.companyid || req.body.companyId || req.body.compid,
        BranchName: req.body.branchname || req.body.branchName,
        Status: 'Pending', 
        StartDate: req.body.startdate || req.body.StartDate,
        EndDate: req.body.enddate || req.body.EndDate,
        PositionNameEN: req.body.positionNameEn || req.body.positionnameen,
        PositionNameTH: req.body.positionNameTh || req.body.positionnameth,
        Comment: req.body.comment,
        Rating: req.body.rating,
        OfferID: req.body.offerId || req.body.offerid || req.body.offerID,
    }

    if (!newEngOfficialInternship.StudentID) {
        res.status(422).send({
            "message": "Please specify student ID"
        })
    } if (!newEngOfficialInternship.Year) {
        res.status(422).send({
            "message": "Please specify year"
        })
    } if (!newEngOfficialInternship.CompanyID) {
        res.status(422).send({
            "message": "Please specify company ID"
        })
    } if (!newEngOfficialInternship.BranchName) {
        res.status(422).send({
            "message": "Please specify branch name"
        })
    } if (!newInternship.EndDate || !newInternship.StartDate) {
        res.status(422).send({
            "message": "Please specify internship start and end date"
        })
    } 
     else {
        db.query(SQL.CREATE_NEW_INTERNSHIP, newInternship, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "internship already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                db.query(SQL.CREATE_NEW_ENG_OFFICIAL_INTERNSHIP, newEngOfficialInternship, (err, results, fields) => {
                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            res.status(400).send({
                                message: "eng official internship already exists!"
                            });
                        } else {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    } else {
                        res.sendStatus(202);
                    }
                })
                // res.sendStatus(202);
            }
        })
        
        
    }
}