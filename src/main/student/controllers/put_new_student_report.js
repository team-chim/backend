const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let stuid = req.params.stuid;

    // Must match DB
    let newReport = {
        StudentID:      stuid,
        Year:           req.body.year,
        CompanyID:      req.body.companyId || req.body.compid || req.body.companyID,
        BranchName:     req.body.branchName || req.body.branchname,
        Number:         req.body.number,
        Date:           req.body.date,
        Hours:          req.body.hours,
    }

    if (!newReport.StudentID) {
        res.status(422).send({
            "message": "Please specify student ID"
        })
    } else if (!newReport.Year) {
        res.status(422).send({
            "message": "Please specify year"
        })
    } else if (!newReport.CompanyID) {
        res.status(422).send({
            "message": "Please specify company ID"
        })
    } else if (!newReport.BranchName) {
        res.status(422).send({
            "message": "Please specify branch name"
        })
    } else if (!newReport.Number) {
        res.status(422).send({
            "message": "Please specify report number"
        })
    } else if (!newReport.Date) {
        res.status(422).send({
            "message": "Please specify submission date"
        })
    } 
    else {
        db.query(SQL.CREATE_NEW_REPORT, newReport, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Report already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(202);
            }
        })
    }
}