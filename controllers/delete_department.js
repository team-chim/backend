// router.delete('/faculties/:fid/departments/:depid', require('../controllers/delete_department'));

const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    const facultyid = req.params.fid;
    const departmentid = req.params.depid;

    if (!facultyid) {
        res.status(422).send({
            "message": "Please specify a Faculty ID"
        })
    } else {
        db.query("DELETE FROM department WHERE FacultyID = ? AND DepartmentID = ?;", [facultyid, departmentid], (err, results, fields) => {
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