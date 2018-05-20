const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;

    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else {
        db.query(SQL.FIND_STUDENT_INTERNSHIP_OFFICIAL, [studentid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (results.length > 0) {
                    res.send(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        }) 
    }
}