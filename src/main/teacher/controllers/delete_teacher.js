const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const teacherid = req.params.tid;

    if (!teacherid) {
        res.status(422).send({
            "message": "Please specify a Teacher ID"
        })
    } else {
        db.query("DELETE FROM teacher WHERE TeacherID = ?;", teacherid, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.status(200).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            }
        })
    }
}


//