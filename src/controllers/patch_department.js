const db = require('../database')
const SQL = require('../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `WorksForFaculty`, `WorksForDepartment`, `WorksForDepartment`)
module.exports = (req, res) => {
    let fid = req.params.fid;
    let depid = req.params.depid;

    let nameEn = req.body.nameEn || req.body.nameen;
    let nameTh = req.body.nameTh || req.body.nameth;

    let depObj = {}
    if (nameEn) depObj.NameEN = nameEn;
    if (nameTh) depObj.NameTH = nameTh;

    db.query(SQL.UPDATE_DEPARTMENT, [depObj, fid, depid], (err, results, fields) => {
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