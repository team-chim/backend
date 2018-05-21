const db = require('../../../database')
const SQL = require('../../../queries/index');


// INSERT INTO student (`StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `EnterYear`, `Adviser`, `Nation`, `MajorFaculty`, `MajorDepartment`, `MajorDepartment`)
module.exports = (req, res) => {
    let studentid = req.body.studentid || req.body.studentId;
    let fNameEn = req.body.fnameen || req.body.fNameEn;
    let mNameEn = req.body.mnameen || req.body.mNameEn;
    let lNameEn = req.body.lnameen || req.body.lNameEn;
    let fNameTh = req.body.fnameth || req.body.fNameTh;
    let mNameTh = req.body.mnameth || req.body.mNameTh;
    let lNameTh = req.body.lnameth || req.body.lNameTh;
    let studentEmail = req.body.studentemail || req.body.studentEmail;
    let adviser = req.body.advisor || req.body.adviser;
    let nation = req.body.nation;
    let majorFaculty = req.body.majorfaculty || req.body.majorFaculty;
    let majorDepartment = req.body.majorDepartment || req.body.majorDepartment;
    let minorFaculty = req.body.minorfaculty || req.body.minorFaculty;
    let minorDepartment = req.body.minordepartment || req.body.minorDepartment;

    let studentParams = [studentid, fNameEn, mNameEn, lNameEn, 
                  fNameTh, mNameTh, lNameTh, 
                  studentEmail, adviser, 
                  nation, majorFaculty, majorDepartment];

    let undergrad = {
        StudentID: studentid, 
        MinorFaculty: minorFaculty, 
        MinorDepartment: minorDepartment
    };
    
    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a Student ID [field: studentId]"
        })
    } else if (!fNameEn || !lNameEn) {
        res.status(422).send({
            "message": "Please specify the student's name [field: fNameEn, lNameEn]"
        })
    } else if (!adviser) {
        res.status(422).send({
            "message": "Please specify the adviser ID"
        })
    } else if (!nation) {
        res.status(422).send({
            "message": "Please specify the student's nationality [field: nation]"
        })
    } else if (!majorFaculty || !majorDepartment) {
        res.status(422).send({
            "message": "Please specify the student's faculty and department (no department field is not supported yet)" 
        })
    } else {
        db.query(SQL.CREATE_NEW_STUDENT, [studentParams], (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Student already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                db.query(SQL.CREATE_NEW_UNDERGRAD_STUDENT, undergrad, (err, results, fields) => {
                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            res.status(400).send({
                                message: "Undergrad Student already exists!"
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
        })
    }
    
}