//Not checked yet  Use with careful !!!!
const db = require('../database')

module.exports =  {
	
	
	//Nationality
	
	OLD_VALID_NATIONALITY: {
		NationName: 'Wakanda'
	},
	
	NEW_VALID_NATIONALITY: {
		NationName: 'Autralian'
	},
	

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
    
	//Payment
	
	OLD_VALID_PAYMENT: {
		StudentID: '5732671526',
		Year: '2016',
		Semester: '1',
		PaymentID: 'AA-089765',
		PaymentStatus: 'Success',
		PaymentDate: '2016-07-20',
	},
	
	NEW_VALID_PAYMENT: {
		StudentID: '5732671526',
		Year: '2016',
		Semester: '1',
		PaymentID: 'BB-555555',
		PaymentStatus: 'Success',
		PaymentDate: '2016-07-20',
	},
	
	//Main_branch
	
	OLD_VALID_MAIN_BRANCH: {
		CompanyID: 1,
		BranchName: 'Siam Paragon',
	},
	
	NEW_VALID_MAIN_BRANCH: {
		CompanyID: 1,
		BranchName: 'Central World',
	},
	
	//Internship_to_department
	
	OLD_VALID_INTERNSHIP_TO_DEPARTMENT: {
		CompanyID: 4,
		Year: 2018,
		OfferID: 2,
		FacultyID: 21,
		DepartmentID: 1,
	},
	
	NEW_VALID_INTERNSHIP_TO_DEPARTMENT: {
		CompanyID: 4,
		Year: 2018,
		OfferID: 2,
		FacultyID: 21,
		DepartmentID: 10,
	},
	
	//Studies
	
	OLD_VALID_STUDIES: {
		StudentID: '5732831021',
		SubjectID: '2110101',
		Year: 2016,
		Semester: 2,
		SectionNo: 2,
		Grade: 'A',
	},
	
	NEW_VALID_STUDIES: {
		StudentID: '5732831021',
		SubjectID: '2110101',
		Year: 2016,
		Semester: 2,
		SectionNo: 2,
		Grade: 'B',
	},
	
	//Company_Industries
	
	OLD_VALID_COMPANY_INDUSTRIES: {
		CompanyID: 1,
		Industry: 'Agriculture',
	},
	
	NEW_VALID_COMPANY_INDUSTRIES: {
		CompanyID: 2,
		Industry: 'Agriculture',
	},
	
	//Has_fee
	
	OLD_VALID_HAS_FEE: {
		FacultyGroupID: 1,
		IsThai: true,
		EntryYear: 2018,
		GradFee: 30000,
		UndergradFee: 25000,
	},
	
	NEW_VALID_HAS_FEE: {
		FacultyGroupID: 1,
		IsThai: false,
		EntryYear: 2018,
		GradFee: 88000,
		UndergradFee: 50000,
	},
	
	//Internship
	
	OLD_VALID_INTERNSHIP: {
		StudentID: '5730123421',
		Year: '2015',
		CompanyID: 1,
		BranchName: '-',
		Status: 'Completed',
		StartDate: '2015-06-01',
		EndDate: '2015-08-01',
		PositionNameEN: 'Backend Developer',
		PositionNameTH: null,
		Comment: 'Good Good',
		Rating: 10,
		OfferID: null,
	},
	
	NEW_VALID_INTERNSHIP: {
		StudentID: '5731150221',
		Year: '2015',
		CompanyID: 1,
		BranchName: '-',
		Status: 'Completed',
		StartDate: '2015-07-01',
		EndDate: '2015-08-01',
		PositionNameEN: 'Front Developer',
		PositionNameTH: null,
		Comment: 'very nice',
		Rating: 8,
		OfferID: null,
	},
	
	//Eng_official_internship
	
	OLD_VALID_ENG_OFFICIAL_INTERNSHIP: {
		StudentID: '5730098721',
		Year: 2016,
		CompanyID: 3,
		BranchName: 1,
	},
	
	NEW_VALID_ENG_OFFICIAL_INTERNSHIP: {
		StudentID: '5730098721',
		Year: 2016,
		CompanyID: 3,
		BranchName: 2,
	},
	
	//Report
	
	OLD_VALID_REPORT: {
		StudentID: '5730000021 ',
		Year: 2016,
		CompanyID: 3,
		BranchName: '1',
		Number: 1,
		Date: '2017-06-14',
	},
	
	NEW_VALID_REPORT: {
		StudentID: '5730000021 ',
		Year: 2016,
		CompanyID: 3,
		BranchName: '1',
		Number: 1,
		Date: '2017-06-15',
	},
	
}
