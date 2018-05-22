//Not checked yet  Use with careful !!!!
const db = require('../database')

module.exports =  {

    // Company
	
	OLD_VALID_COMPANY: {
		NameEN: 'AIS',
		NameTH: 'แอดวานซ์ อินโฟร์ เซอร์วิส'
	},
	
	NEW_VALID_COMPANY: {
		NameEN: 'Exxon Mobil',
		NameTH: 'เอ็กซอนโมบิล คอร์ปอเรชั่น'
	},

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
	
	// Faculties
    EXIST_FACULTY: 21,
    NON_EXIST_FACULTY: 99,
    
	OLD_FACULTY: {
		FacultyID: '99',
		NameEN: 'ABC',
		NameTH: 'เอบีซี',
		TelNo: '999-999-999',
		BelongsTo: '1'
	},
	
	NEW_FACULTY: {
		FacultyID: '50',
		NameEN: 'IJK',
		NameTH: 'ไอเจเค',
		TelNo: '888-888-888',
		BelongsTo: '2'
	},
	
	//Nationality
	
	OLD_VALID_NATIONALITY: {
		NationName: 'Wakanda'
	},
	
	NEW_VALID_NATIONALITY: {
		NationName: 'Autralian'
	},
	
	//Subject
	
	OLD_VALID_SUBJECT: {
		SubjectID: '2201123',
		NameAbv: 'THAI JUV LIT',
		NameEN: 'Thai Juvenile Literature',
		NameTH: 'วรรณกรรมไทยสำหรับเยาวชน',
		Credit: 3
	},
	
	NEW_VALID_SUBJECT: {
		SubjectID: '2202999',
		NameAbv: 'ENG JUV LIT',
		NameEN: 'English Juvenile Literature',
		NameTH: 'วรรณกรรมอังกฤษสำหรับเยาวชน',
		Credit: 3
	},
	
	//Department
	
	OLD_VALID_DEPARTMENT:{
		FacultyID: '21',
		DepartmentID: '55',
		NameEN: 'Mechanical Computer',
		NameTH: 'เครื่องคอมพ์',
	},
	
	NEW_VALID_DEPARTMENT:{
		FacultyID: '21',
		DepartmentID: '66',
		NameEN: 'test',
		NameTH: 'ทดสอบ',
	},
	
	// Teachers
    EXIST_TEACHER: '0000034157',
    NON_EXIST_TEACHER: '1133557799',
	
	OLD_VALID_TEACHER:{
		FnameEN: 'Ben',
		MnameEN: 'A',
		LnameEN: 'Jy',
		FnameTH: 'เบ็น',
		MnameTH: 'เอ',
		LnameTH: 'จี้',
		TeacherEmail: 'ben.jy@gmail.com',
		TelNo: '000-999-888',
		WorksForFaculty: '21',
		WorksForDepartment: '1',
		Since: '2017-05-01',
	},
	
	NEW_VALID_TEACHER:{
		FnameEN: 'Bel',
		MnameEN: 'B',
		LnameEN: 'DO',
		FnameTH: 'เบล',
		MnameTH: 'บี',
		LnameTH: 'ดู',
		TeacherEmail: 'bel.do@gmail.com',
		TelNo: '888-999-000',
		WorksForFaculty: '22',
		WorksForDepartment: '4',
		Since: '2017-05-03',
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
    
	//Internship_offer
	
	OLD_INTERNSHIP_OFFER:{
		CompanyID: 1,
		Year: '2013',
		PositionNameEN: 'A',
		PositionNameTH: 'เอ',
		PositionDescriptionEN: 'AAA',
		PositionDescriptionTH: 'เอเอเอ',
		NumberOfPosition: '3',
		OtherRequirements: null,
		StatedMinimumGrade: '3.00',
		StatedSalary: '1000',
		OtherBenefits: null,
		ExpiryDate: '2013-12-31',
	},
	
	NEW_INTERNSHIP_OFFER:{
		CompanyID: 1,
		Year: '2013',
		PositionNameEN: 'B',
		PositionNameTH: 'บี',
		PositionDescriptionEN: 'BBB',
		PositionDescriptionTH: 'บีบีบี',
		NumberOfPosition: '3',
		OtherRequirements: null,
		StatedMinimumGrade: '3.00',
		StatedSalary: '1000',
		OtherBenefits: null,
		ExpiryDate: '2014-02-01',
	},

	//Company_branch
	
	OLD_VALID_COMPANY_BRANCH:{
		CompanyID: '1',
		BranchName: 'Pinklao',
		Manager: 'Jon Doe',
		TelNo: '000-111-000-0',
		Address: '111/2 Phar Pinklao rd.',
		City: 'Pinklao',
		State: 'Taling chan',
		PostalCode: '10113',
		Country: 'Thailand',
	},
	
	NEW_VALID_COMPANY_BRANCH:{
		CompanyID: '1',
		BranchName: 'Moonlake',
		Manager: 'John Hiddle',
		TelNo: '000-000-000-0',
		Address: '111/2 Moonlake rd.',
		City: 'Moon',
		State: 'Lake',
		PostalCode: '999999',
		Country: 'Moomoo',
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
	
	//Class
	
	OLD_VALID_CLASS: {
		SubjectID: '2301103',
		Year: '2016',
		Semester: '2',
		MidtermStartDatetime: '2017-03-03 13:00:00',
		MidtermEndDatetime: '2017-03-03 16:00:00',
		FinalStartDatetime: '2017-05-17 13:00:00',
		FinalEndDatetime: '2017-05-17 16:00:00',
	},
	
	NEW_VALID_CLASS: {
		SubjectID: '2301103',
		Year: '2016',
		Semester: '2',
		MidtermStartDatetime: '2017-03-04 13:00:00',
		MidtermEndDatetime: '2017-03-04 16:00:00',
		FinalStartDatetime: '2017-05-20 13:00:00',
		FinalEndDatetime: '2017-05-20 16:00:00',
	},
	
	//Section
	
	OLD_VALID_SECTION:{
		SubjectID: '2301103',
		Year: 2016,
		Semester: 2,
		SectionNo: 44,
		Classroom: 'ENG-204',
		GenedType: 0,
		MaxStudent: 20,
		TeachedBy: '0010003176',
	},
	
	NEW_VALID_SECTION:{
		SubjectID: '2301103',
		Year: 2016,
		Semester: 2,
		SectionNo: 20,
		Classroom: 'ENG-209',
		GenedType: 0,
		MaxStudent: 30,
		TeachedBy: '0123456789',
	},
	
	//Managementship
	
	OLD_VALID_SECTION:{
		TeacherID: '0010013658',
		FacultyID: 21,
		DepartmentID: 10,
		StartDate: '2016-05-01',
		EndDat: null,
	},
	
	NEW_VALID_SECTION:{
		TeacherID: '0010013731',
		FacultyID: 21,
		DepartmentID: 10,
		StartDate: '2015-05-01',
		EndDat: null,
	},
	
	//Main_branch
	
	OLD_VALID_MAIN_BRANCH:{
		CompanyID: 1,
		BranchName: 'Siam Paragon',
	},
	
	NEW_VALID_MAIN_BRANCH:{
		CompanyID: 1,
		BranchName: 'Central World',
	},
	
	//Subject_requires
	
	OLD_VALID_SUBJECT_REQUIRES:{
		SubjectID: '2302112',
		ReqSubjectID: '2302127',
	},
	
	NEW_VALID_SUBJECT_REQUIRES:{
		SubjectID: '2302112',
		ReqSubjectID: '2302113',
	},
	
	//Internship_to_department
	
	OLD_VALID_INTENRSHIP_TO_DEPARTMENT:{
		CompanyID: 4,
		Year: 2018,
		OfferID: 2,
		FacultyID: 21,
		DepartmentID: 1,
	},
	
	NEW_VALID_INTENRSHIP_TO_DEPARTMENT:{
		CompanyID: 4,
		Year: 2018,
		OfferID: 2,
		FacultyID: 21,
		DepartmentID: 10,
	},
	
	//Studies
	
	OLD_VALID_STUDIES:{
		StudentID: '5732831021',
		SubjectID: '2110101',
		Year: 2016,
		Semester: 2,
		SectionNo: 2,
		Grade: 'A',
	},
	
	NEW_VALID_STUDIES:{
		StudentID: '5732831021',
		SubjectID: '2110101',
		Year: 2016,
		Semester: 2,
		SectionNo: 2,
		Grade: 'B',
	},
	
	//Company_Industries
	
	OLD_VALID_COMPANY_INDUSTRIES:{
		CompanyID: 1,
		Industry: 'Agriculture',
	},
	
	NEW_VALID_COMPANY_INDUSTRIES:{
		CompanyID: 2,
		Industry: 'Agriculture',
	},
	
	//Section_Datetime
	
	OLD_VALID_SECTION_DATETIME:{
		Year: 2016,
		Semester: 1,
		SubjectID: '2110263',
		SectionNo: 1,
		Day: 'MO',
		StartTime: '13:00:00',
		EndTime: '16:00:00',
	},
	
	NEW_VALID_SECTION_DATETIME:{
		Year: 2016,
		Semester: 1,
		SubjectID: '2110263',
		SectionNo: 2,
		Day: 'TU',
		StartTime: '13:00:00',
		EndTime: '16:00:00',
	},
	
	
	//Has_fee
	
	OLD_VALID_HAS_FEE:{
		FacultyGroupID: 1,
		IsThai: true,
		EntryYear: 2018,
		GradFee: 30000,
		UndergradFee: 25000,
	},
	
	NEW_VALID_HAS_FEE:{
		FacultyGroupID: 1,
		IsThai: false,
		EntryYear: 2018,
		GradFee: 88000,
		UndergradFee: 50000,
	},
	
	//Internship
	
	OLD_VALID_INTENRSHIP:{
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
	
	NEW_VALID_INTENRSHIP:{
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
	
	OLD_VALID_ENG_OFFICIAL_INTERNSHIP:{
		StudentID: '5730098721',
		Year: 2016,
		CompanyID: 3,
		BranchName: 1,
	},
	
	NEW_VALID_ENG_OFFICIAL_INTERNSHIP:{
		StudentID: '5730098721',
		Year: 2016,
		CompanyID: 3,
		BranchName: 2,
	},
	
	//Report
	
	OLD_VALID_REPORT:{
		StudentID: '5730000021 ',
		Year: 2016,
		CompanyID: 3,
		BranchName: '1',
		Number: 1,
		Date: '2017-06-14',
	},
	
	NEW_VALID_REPORT:{
		StudentID: '5730000021 ',
		Year: 2016,
		CompanyID: 3,
		BranchName: '1',
		Number: 1,
		Date: '2017-06-15',
	},
	
}
