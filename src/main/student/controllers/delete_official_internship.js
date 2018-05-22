const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const studentid = req.params.stuid;
    const year = req.body.year || req.body.Year;
    const companyid = req.body.companyid || req.body.CompanyID;
    const branchname = req.body.branchname || req.body.BranchName;

    const queryParams = [studentid, year, companyid, branchname];

    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a Student ID"
        })
    } else if (!year) {
        res.status(422).send({
            "message": "Please specify a Year"
        })
    } else if (!companyid) {
        res.status(422).send({
            "message": "Please specify a Company"
        })
    } else if (!branchname) {
        res.status(422).send({
            "message": "Please specify a Branch Name"
        })
    } else {
        db.query("DELETE FROM eng_official_internship WHERE StudentID = ? AND Year = ? AND CompanyID = ? AND BranchName = ?;", queryParams, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.affectedRows > 0) {
                res.status(204).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            } else {
                res.status(404).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            }
        })
    }
}


//