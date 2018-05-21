const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;
    let reportid = req.params.repid;

    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else if (!reportid) {
        db.query(SQL.FIND_STUDENT_REPORTS, [studentid], (err, reports, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (reports.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(reports);
            }
        })
    } else {
        db.query(SQL.FIND_STUDENT_REPORT, [studentid, reportid], (err, reports, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (reports.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(reports[0]);
            }
        })
    }
}