const db = require('../../../database')

module.exports = {
	// Academic Year
    
    EXIST_ACADEMIC_YEAR: 2016,
    NON_EXIST_ACADEMIC_YEAR: 8888,

	OLD_VALID_ACADEMIC_YEAR: {
		Year: 2012
	},
	
	NEW_VALID_ACADEMIC_YEAR: {
		Year: 2019
    },

    // Semester
    
    SEMESTER_YEAR: 2016,
    EXIST_SEMESTER: 2,
    NON_EXIST_SEMESTER: 9,
	
	OLD_VALID_SEMESTER:{
		Year: 2014,
		Semester: 1,
		SemesterStartDate: '2013-08-01',
		SemesterEndDate: '2013-12-20',
		RegisterStartDate: '2013-06-15',
		RegisterEndDate: '2013-06-30',
		AddingStartDate: '2013-08-01',
		AddingEndDate: '2013-08-15',
		DroppingStartDate: '2013-08-01',
		DroppingEndDate: '2013-08-15',
		WithdrawStartDate: '2013-08-16',
		WithdrawEndDate: '2013-10-30',
	},
	
	NEW_VALID_SEMESTER:{
		Year: 2014,
		Semester: 2,
		SemesterStartDate: '2013-09-01',
		SemesterEndDate: '2014-01-20',
		RegisterStartDate: '2013-07-15',
		RegisterEndDate: '2013-07-30',
		AddingStartDate: '2013-09-01',
		AddingEndDate: '2013-09-15',
		DroppingStartDate: '2013-09-01',
		DroppingEndDate: '2013-09-15',
		WithdrawStartDate: '2013-09-16',
		WithdrawEndDate: '2013-11-30',
	},
    
    // Academic year & Semester Methods
    
    resetAcademicYearTable: function(done) {
        db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.NON_EXIST_ACADEMIC_YEAR, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.NEW_VALID_ACADEMIC_YEAR.Year, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.OLD_VALID_ACADEMIC_YEAR.Year, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query("INSERT INTO rexchula.`academic_year` SET ?;", this.OLD_VALID_ACADEMIC_YEAR, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        done();
                    })
                });
            });
        });
    },

    resetSemesterTable: function(done) {
        db.query('DELETE FROM rexchula.`semester` WHERE Year = ? AND Semester = ?;', [this.SEMESTER_YEAR, this.NON_EXIST_SEMESTER], (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`semester` WHERE Year = ? AND Semester = ?;', [this.NEW_VALID_SEMESTER.Year, this.NEW_VALID_SEMESTER.Semester], (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`semester` WHERE Year = ? AND Semester = ?;', [this.OLD_VALID_SEMESTER.Year, this.OLD_VALID_SEMESTER.Semester], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query("INSERT INTO rexchula.`semester` SET ?;", this.OLD_VALID_SEMESTER, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        done();
                    })
                });
            });
        });
    },
    
}