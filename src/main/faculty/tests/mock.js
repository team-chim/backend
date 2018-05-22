const db = require('../../../database')

module.exports = {

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


	//Department
	
	OLD_VALID_DEPARTMENT: {
		FacultyID: '21',
		DepartmentID: '55',
		NameEN: 'Mechanical Computer',
		NameTH: 'เครื่องคอมพ์',
	},
	
	NEW_VALID_DEPARTMENT: {
		FacultyID: '21',
		DepartmentID: '66',
		NameEN: 'test',
		NameTH: 'ทดสอบ',
	},

	//Managementship
	
	OLD_VALID_MANAGEMENTSHIP: {
		TeacherID: '0010013658',
		FacultyID: 21,
		DepartmentID: 10,
		StartDate: '2016-05-01',
		EndDate: null,
	},
	
	NEW_VALID_MANAGEMENTSHIP: {
		TeacherID: '0010013731',
		FacultyID: 21,
		DepartmentID: 10,
		StartDate: '2015-05-01',
		EndDate: null,
	},
	
	
}