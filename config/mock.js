const db = require('../database')

module.exports =  {

    EXIST_STUDENT: '5730123421',
    NON_EXIST_STUDENT: '5999999999',
    NEW_UNDERGRAD: '5831111111',
    NEW_GRAD: '5872222222',
    OLD_STUDENT: '5834444444',

    EXIST_TEACHER: '0000034157',
    NON_EXIST_TEACHER: '1133557799',

    EXIST_FACULTY: 21,
    NON_EXIST_FACULTY: 99,
    EXIST_FACULTY_GROUP: 1,
    NON_EXIST_FACULTY_GROUP: 9,

    resetStudentTable: () => {
        db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', NON_EXIST_STUDENT, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', NEW_UNDERGRAD, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`student` WHERE StudentID = ?;', NEW_GRAD, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query("INSERT INTO rexchula.`student` VALUES (?, 'Test', NULL, 'Deletion', 'ทดสอบ', NULL, 'ระบบ', '', '0000034157', 'Thai', 21, 2);", OLD_STUDENT, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    })
                });
            });
        });
    },
}