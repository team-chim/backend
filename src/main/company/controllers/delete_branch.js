const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const companyid = req.params.compid;
    const branchid = req.params.brid;

    
    db.query("DELETE FROM company_branch WHERE CompanyID = ? AND BranchName = ?;", [companyid, brid], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else if (results.affectedRows === 0) {
            res.status(404).send({
                affectedRows: results.affectedRows,
                message: results.message
            });
        } else {
            res.status(204).send({
                affectedRows: results.affectedRows,
                message: results.message
            });
        }
    })
}