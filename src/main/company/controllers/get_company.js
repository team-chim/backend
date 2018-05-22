const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let companyid = req.params.compid;

    // Maintain compatability with APIv1
    if (!companyid) companyid = req.body.companyid || req.body.CompanyID || req.body.CompanyId || req.query.companyid || req.query.CompnayID || req.query.CompanyId;
    
    if (!companyid) {
        res.status(422).send({
            "message": "Please specify a company ID"
        })
    } else {
        db.query(SQL.FIND_COMPANY_DETAIL, [companyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                if (results.length > 0) {

                    let company = results[0];

                    db.query("SELECT `Industry` FROM company_industries WHERE `CompanyID` = ?;", companyid, (err, industries, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            db.query(SQL.FIND_COMPANY_BRANCHES, [companyid], (err, branches, fields) => {
                                if (err) {
                                    console.log(err);
                                    res.sendStatus(500);
                                } else {
                                    company.branches = branches;
                                    res.send(company);
                                }
                            })
                        }
                    })
                } else {
                    res.sendStatus(404);
                }
            }
        });
    }

}