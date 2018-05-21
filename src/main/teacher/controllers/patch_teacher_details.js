const db = require('../../../database')
const SQL = require('../../../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `WorksForFaculty`, `WorksForDepartment`, `WorksForDepartment`)
module.exports = (req, res) => {
    let tid = req.params.tid;
    let fNameEn = req.body.fnameen || req.body.fNameEn;
    let mNameEn = req.body.mnameen || req.body.mNameEn;
    let lNameEn = req.body.lnameen || req.body.lNameEn;
    let fNameTh = req.body.fnameth || req.body.fNameTh;
    let mNameTh = req.body.mnameth || req.body.mNameTh;
    let lNameTh = req.body.lnameth || req.body.lNameTh;
    let teacherEmail = req.body.teacheremail || req.body.teacherEmail;
    let telno = req.body.telno || req.body.telNo;
    let worksforFaculty = req.body.worksforfaculty || req.body.worksforFaculty;
    let worksforDepartment = req.body.worksforDepartment || req.body.worksforDepartment;
    let since = req.body.since || req.body.Since;

    let teacherObj = {}
    if (fNameEn) teacherObj.FnameEN = fNameEn;
    if (mNameEn) teacherObj.MnameEN = mNameEn;
    if (lNameEn) teacherObj.LnameEN = lNameEn;
    if (fNameTh) teacherObj.FnameTH = fNameTh;
    if (mNameTh) teacherObj.MnameTH = mNameTh;
    if (lNameTh) teacherObj.LnameTH = lNameTh;
    if (teacherEmail) teacherObj.TeacherEmail = teacherEmail;
    if (telno) teacherObj.TelNo = telno;
    if (worksforFaculty) teacherObj.WorksForFaculty = worksforFaculty;
    if (worksforDepartment) teacherObj.WorksForDepartment = worksforDepartment;
    if (since) teacherObj.since = since;

    db.query(SQL.UPDATE_TEACHER, [teacherObj, tid], (err, results, fields) => {
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