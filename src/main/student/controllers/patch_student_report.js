const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let stuid = req.params.stuid;
    let repno = req.params.repno;
    let year = req.body.year  || req.body.Year; 
    let compid = req.body.compid || req.body.compId || req.body.companyId || req.body.companyID;
    let brid = req.body.brid || req.body.branch || req.body.branchName || req.body.branchname;

    let date = req.body.date || req.body.Date;
    let hours = req.body.hours || req.body.hours;

    let repObj = {}

    if (date) repObj.Date = date
    if (hours) repObj.Hours = hours;

    db.query(SQL.UPDATE_REPORT, [repObj, stuid, year, compid, brid, repno], (err, results, fields) => {
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