const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let companyId = req.params.compid;
    
    // Must match DB
    let newBranch = {
        CompanyID: companyId,
        BranchName: req.body.branchName || req.body.BranchName,
        Manager: req.body.manager || req.body.Manager,
        TelNo: req.body.telNo || req.body.TelNo,
        Address: req.body.address || req.body.Address,
        City: req.body.city || req.body.City,
        State: req.body.state || req.body.State,
        PostalCode: req.body.postalCode || req.body.PostalCode,
        Country: req.body.country || req.body.Country
    }

    if (!newBranch.BranchName) {
        res.status(422).send({
            "message": "Please specify a branch name"
        })
    } else {
        db.query(SQL.CREATE_NEW_BRANCH, newBranch, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Branch already exists!"
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