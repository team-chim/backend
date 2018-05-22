const db = require('../../../database')

module.exports = {

	// Subject
	
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


	// Subject requires
	
	OLD_VALID_SUBJECT_REQUIRES: {
		SubjectID: '2302112',
		ReqSubjectID: '2302127',
	},
	
	NEW_VALID_SUBJECT_REQUIRES: {
		SubjectID: '2302112',
		ReqSubjectID: '2302113',
	},

	// Class
	
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
	
	// Section
	
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
    
	// Section Datetime
	
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
	
}