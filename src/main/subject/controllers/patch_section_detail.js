const db = require('../../../database')
const SQL = require('../../../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `WorksForFaculty`, `WorksForDepartment`, `WorksForDepartment`)
module.exports = (req, res) => {
    let subid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;
    let sectno = req.params.sectno;


    let classroom = req.body.classroom || req.body.classRoom;
    let genedType = req.body.genedtype || req.body.genedType;
    let maxStudent = req.body.maxstudent || req.body.maxStudent;
    let currentStudent = null;
    let teachedBy = req.body.teachedby || req.body.teachedBy;

    let sectObj = {}
    if (classroom) sectObj.classRoom = classroom;
    if (genedType) sectObj.GenedType = genedType;
    if (maxStudent) sectObj.MaxStudent = maxStudent;
    if (!currentStudent) sectObj.CurrentStudent = currentStudent;
    if (teachedBy) sectObj.TeachedBy = teachedBy;

    db.query(SQL.UPDATE_SECTION, [sectObj, subid, year, semester, sectno], (err, results, fields) => {
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