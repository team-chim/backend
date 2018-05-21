// faculty_groups/:fgid

const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    const faculty_group_id = req.params.fgid;

    if (!faculty_group_id) {
        res.status(422).send({
            "message": "Please specify a Faculty Group ID"
        })
    } else {
        db.query("DELETE FROM faculty_group WHERE FacultyGroupID = ?;", faculty_group_id, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.affectedRows === 0) {
                res.status(404).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
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