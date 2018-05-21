const db = require('../../../database')

module.exports = {
	// Academic Year
    
    EXIST_ACADEMIC_YEAR: 2016,
    NON_EXIST_ACADEMIC_YEAR: 8888,

	OLD_VALID_ACADEMIC_YEAR: {
		year: '2012'
	},
	
	NEW_VALID_ACADEMIC_YEAR: {
		year: '2019'
    },

    // Semester
    
    SEMESTER_YEAR: 2016,
    EXIST_SEMESTER: 2,
    NON_EXIST_SEMESTER: 9,
	
	OLD_VALID_SEMESTER:{
		year: 2014,
		semester: 1,
		semesterStartDate: '2013-08-01',
		semesterEndDate: '2013-12-20',
		registerStartDate: '2013-06-15',
		registerEndDate: '2013-06-30',
		addingStartDate: '2013-08-01',
		addingEndDate: '2013-08-15',
		droppingStartDate: '2013-08-01',
		droppingEndDate: '2013-08-15',
		withdrawStartDate: '2013-08-16',
		withdrawEndDate: '2013-10-30',
	},
	
	NEW_VALID_SEMESTER:{
		year: 2014,
		semester: 2,
		semesterStartDate: '2013-09-01',
		semesterEndDate: '2014-01-20',
		registerStartDate: '2013-07-15',
		registerEndDate: '2013-07-30',
		addingStartDate: '2013-09-01',
		addingEndDate: '2013-09-15',
		droppingStartDate: '2013-09-01',
		droppingEndDate: '2013-09-15',
		withdrawStartDate: '2013-09-16',
		withdrawEndDate: '2013-11-30',
	},
    
    // Academic year & Semester Methods
    
    resetAcademicYearTable: function(done) {
        db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.NON_EXIST_ACADEMIC_YEAR, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.NEW_VALID_ACADEMIC_YEAR.year, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`academic_year` WHERE Year = ?;', this.OLD_VALID_ACADEMIC_YEAR.year, (err, results, fields) => {
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
            db.query('DELETE FROM rexchula.`semester` WHERE Year = ? AND Semester = ?;', [this.NEW_VALID_SEMESTER.year, this.NEW_VALID_SEMESTER.semester], (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`semester` WHERE Year = ? AND Semester = ?;', [this.OLD_VALID_SEMESTER.year, this.OLD_VALID_SEMESTER.semester], (err, results, fields) => {
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