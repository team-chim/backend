const db = require('../../../database')
const SQL = require('../../../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `WorksForFaculty`, `WorksForDepartment`, `WorksForDepartment`)
module.exports = (req, res) => {
    let fid = req.params.fid;
    let depid = req.params.depid;
    let tid = req.body.teacherId || req.body.tid;
    let startdate = req.body.startDate || req.body.startdate;
    let enddate = req.body.endDate || req.body.enddate

    db.query(SQL.UPDATE_MANAGEMENTSHIP, [enddate, tid, fid, depid, startdate], (err, results, fields) => {
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