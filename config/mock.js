const db = require('../database')

module.exports =  {

    // Students
    EXIST_STUDENT: '5730123421',
    NON_EXIST_STUDENT: '5999999999',
    
    OLD_VALID_STUDENT: {
        studentid: '5831832021',
        fNameEn: 'Old',
        mNameEn: 'Test',
        lNameEn: 'Undergrad',
        adviser: '0000034157',
        nation: 'Thai',
        majorFaculty: 21,
        majorDepartment: 2,
    },

    NEW_VALID_UNDERGRAD: {
        studentid: '5847789822',
        fNameEn: 'New',
        mNameEn: 'Test',
        lNameEn: 'Undergrad',
        adviser: '0000034157',
        nation: 'Thai',
        majorFaculty: 22,
        majorDepartment: 2,
    },

    NEW_VALID_GRAD: {
        studentid: '5882223322',
        fNameEn: 'New',
        mNameEn: 'Test',
        lNameEn: 'Grad',
        adviser: '0000034157',
        nation: 'Thai',
        majorFaculty: 22,
        majorDepartment: 2,
    },


    // Student Methods
    resetStudentTable: function(done) {
        db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', this.NON_EXIST_STUDENT, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', this.NEW_VALID_UNDERGRAD.studentid, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', this.NEW_VALID_GRAD.studentid, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', this.OLD_VALID_STUDENT.studentid, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        db.query("INSERT INTO rexchula.`student` SET ?;", this.OLD_VALID_STUDENT, (err, results, fields) => {
                            if (err) {
                                console.log(err);
                            }
                            done();
                        })
                    });
                });
            });
        });
    },


    // Teachers
    EXIST_TEACHER: '0000034157',
    NON_EXIST_TEACHER: '1133557799',


    // Faculties
    EXIST_FACULTY: 21,
    NON_EXIST_FACULTY: 99,
    EXIST_FACULTY_GROUP: 1,
    NON_EXIST_FACULTY_GROUP: 9,
}