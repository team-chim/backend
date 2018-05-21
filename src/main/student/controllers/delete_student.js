const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const studentid = req.params.stuid;

    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a Student ID"
        })
    } else {
        db.query("DELETE FROM student WHERE StudentID = ?;", studentid, (err, results, fields) => {
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