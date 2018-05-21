const db = require('../database')
const SQL = require('../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `MajorFaculty`, `MajorDepartment`, `MajorDepartment`)
module.exports = (req, res) => {
    let stuid = req.body.studentId;
    let fNameEn = req.body.fnameen || req.body.fNameEn;
    let mNameEn = req.body.mnameen || req.body.mNameEn;
    let lNameEn = req.body.lnameen || req.body.lNameEn;
    let fNameTh = req.body.fnameth || req.body.fNameTh;
    let mNameTh = req.body.mnameth || req.body.mNameTh;
    let lNameTh = req.body.lnameth || req.body.lNameTh;
    let studentEmail = req.body.studentemail || req.body.studentEmail;
    let enterYear = req.body.enteryear || req.body.enterYear;
    let advisor = req.body.advisor;
    let nation = req.body.nation;
    let majorFaculty = req.body.majorfaculty || req.body.majorFaculty;
    let majorDepartment = req.body.majorDepartment || req.body.majorDepartment;
    let minorFaculty = req.body.minorfaculty || req.body.minorFaculty;
    let minorDepartment = req.body.minordepartment || req.body.minorDepartment;

    // let studentParams = [fNameEn, mNameEn, lNameEn,
    //     fNameTh, mNameTh, lNameTh,
    //     studentEmail, enterYear, advisor,
    //     nation, majorFaculty, majorDepartment
    // ];
    let studentObj = {}
    if (fNameEn) studentObj.FnameEN = fNameEn;
    if (mNameEn) studentObj.MnameEN = mNameEn;
    if (lNameEn) studentObj.LnameEN = lNameEn;
    if (fNameTh) studentObj.FnameTH = fNameTh;
    if (mNameTh) studentObj.MnameTH = mNameTh;
    if (lNameTh) studentObj.LnameTH = lNameTh;
    if (studentEmail) studentObj.StudentEmail = studentEmail;
    // if (enterYear)      studentObj.EnterYear        = enterYear;
    if (advisor) studentObj.Adviser = advisor;
    if (nation) studentObj.Nation = nation;
    if (majorFaculty) studentObj.MajorFaculty = majorFaculty;
    if (majorDepartment) studentObj.MajorDepartment = majorDepartment;

    // let undergradObj = {}
    // if (minorFaculty) undergradObj.MinorFaculty = minorFaculty;
    // if (minorDepartment) undergradObj.MinorDepartment = minorDepartment;


    // let undergradParams = [minorFaculty, minorDepartment];

    // if ( fNameEn ) studentParams.push( fNameEn )
    db.query(SQL.UPDATE_STUDENT, [studentObj, stuid], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(400).send({
                message: err.code
            })
        } else {
            // db.query(SQL.UPDATE_GRAD, [gradObj, stuid], (err, results, fields) => {
                // if (err) {
                    // console.log(err)
                    // res.status(400).send({
                        // message: err.code
                    // })
                // } else {
                    // res.sendStatus(202);
                // }
            // })
            res.sendStatus(202)
        }
    })


}