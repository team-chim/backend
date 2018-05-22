const db = require('../../../database')

module.exports = {

    // Faculty_Group
    EXIST_FACULTY_GROUP: 1,
    NON_EXIST_FACULTY_GROUP: 9,

    OLD_VALID_FACULTY_GROUP: {
        FacultyGroupID: '15',
        NameEN: 'Group 15',
        NameTH: 'กลุ่ม 15'
    },

    NEW_VALID_FACULTY_GROUP: {
        FacultyGroupID: '20',
        NameEN: 'Group 20',
        NameTH: 'กลุ่ม 20'
    },

    resetFacultyGroupTable: function(done) {
        db.query('DELETE FROM rexchula.`faculty_group` WHERE FacultyGroupID = ?;', this.NON_EXIST_FACULTY_GROUP, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`faculty_group` WHERE FacultyGroupID = ?;', this.NEW_VALID_FACULTY_GROUP.FacultyGroupID, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`faculty_group` WHERE FacultyGroupID = ?;', this.OLD_VALID_FACULTY_GROUP.FacultyGroupID, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query("INSERT INTO rexchula.`faculty_group` SET ?;", this.OLD_VALID_FACULTY_GROUP, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        done();
                    })
                });
            });
        });
    },

};