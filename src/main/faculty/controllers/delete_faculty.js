// router.delete('/faculties/:fid/departments/:depid', require('../controllers/delete_department'));

const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const facultyid = req.params.fid;

    if (!facultyid) {
        res.status(422).send({
            "message": "Please specify a Faculty ID"
        })
    } else {
        db.query("DELETE FROM faculty WHERE FacultyID = ?;", facultyid, (err, results, fields) => {
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