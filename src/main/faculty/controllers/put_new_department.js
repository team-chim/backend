const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let facultyId = req.params.fid;

    // Must match DB
    let newDepartment = {
        FacultyID: facultyId,
        DepartmentID: req.body.departmentId,
        NameEN: req.body.nameEn,
        NameTH: req.body.nameTh,
    }

    if (!newDepartment.FacultyID) {
        res.status(422).send({
            "message": "Please specify faculty ID"
        })
    }
    if (!newDepartment.DepartmentID) {
        res.status(422).send({
            "message": "Please specify department ID"
        })
    }
    if (!newDepartment.NameEN || !newDepartment.NameTH) {
        res.status(422).send({
            "message": "Please specify department names"
        })
    } else {
        db.query(SQL.CREATE_NEW_DEPARTMENT, newDepartment, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Department already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(202);
            }
        })
    }
}