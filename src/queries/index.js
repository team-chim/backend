const fs = require('fs');
const path = require('path');

function loadSql(filename) {
    return fs.readFileSync(path.join(__dirname, filename)).toString()
}

module.exports = {
    FIND_REGISTERED_SUBJECTS : loadSql('05_registered_subject.sql'),
    FIND_REGISTERED_SUBJECTS_YEAR : loadSql('05_registered_subject_year.sql'),
    FIND_REGISTERED_SUBJECTS_SEMESTER : loadSql('05_registered_subject_semester.sql'),

    FIND_STUDY_SCHEDULE : loadSql('06_study_schedule.sql'),

    FIND_FINAL_SCHEDULE : loadSql('07_final_schedule.sql'),
    FIND_MIDTERM_SCHEDULE: loadSql('07_midterm_schedule.sql'),

    FIND_SUBJECTS_ALL: loadSql('08_find_subject_all.sql'),

    FIND_SUBJECT_DETAILS: loadSql('10_find_subject_details.sql'),
    FIND_SUBJECT_SECTION: loadSql('10_find_subject_section.sql'),
    FIND_SUBJECT_SECTION_DETAIL: loadSql('10_find_subject_section_detail.sql'),

    FIND_STUDENT_IN_SECTION: loadSql('13_find_student_in_section.sql'),

    FIND_STUDENT_UNDER_ADVISOR: loadSql('14_find_student_under_advisor.sql'),

    FIND_TEACHER_LIST: loadSql('16_find_teacher_list.sql'),
    FIND_TEACHER_DETAILS: loadSql('16_find_teacher_details.sql'),

    FIND_STUDENT_FEE: loadSql('19_find_fee.sql'),

    FIND_STUDENT_PAYMENT_STATUS: loadSql('20_payment_status.sql'),

    FIND_UNPAID_STUDENT: loadSql('21_unpaid_students.sql'),

    FIND_ALL_OFFERS: loadSql('25_find_all_offers.sql'),
    FIND_ALL_OFFERS_COMPANY: loadSql('25_find_all_offers_by_company.sql'),
    FIND_ALL_OFFERS_YEAR: loadSql('25_find_all_offers_year.sql'),
    FIND_ALL_OFFERS_COMPANY_YEAR: loadSql('25_find_all_offers_company_year.sql'),

    FIND_REVIEW_COMPANY: loadSql('26_find_review.sql'),

    FIND_STUDENT_DETAIL: loadSql('50_student_details.sql'),
    FIND_STUDENTS_ALL: loadSql('50_student_list.sql'),

    FIND_FACULTY_ALL: loadSql('51_faculty_list.sql'),
    FIND_FACULTY_DETAIL: loadSql('51_faculty_details.sql'),

    FIND_DEPARTMENT_IN_FACULTY: loadSql('52_department_in_faculty.sql'),

    FIND_DEPARTMENT_TEACHERS: loadSql('53_find_department_teachers.sql'),
    FIND_DEPARTMENT_DETAILS: loadSql('53_find_department_details.sql'),
    FIND_DEPARTMENT_HEAD: loadSql('53_find_department_head.sql'),

    CREATE_NEW_PAYMENT: loadSql('54_insert_new_payment.sql'),
    CREATE_NEW_OFFER: loadSql('55_insert_new_offer.sql'),

    CREATE_NEW_STUDENT: loadSql('56_insert_new_student.sql'),
    CREATE_NEW_UNDERGRAD_STUDENT: loadSql('56_insert_new_undergrad.sql'),
    CREATE_NEW_GRAD_STUDENT: loadSql('56_insert_new_grad.sql'),

    FIND_COMPANIES: loadSql('60_get_companies.sql'),
    FIND_COMPANY_DETAIL: loadSql('60_get_company_detail.sql'),
    FIND_COMPANY_BRANCHES: loadSql('61_get_company_branches.sql'),
    FIND_BRANCH_DETAILS: loadSql('61_branch_details.sql'),

    FIND_INTERNSHIPS_OFFICIAL_YEAR: loadSql('62_find_internships_official_year.sql'),
    FIND_STUDENT_INTERNSHIP_OFFICIAL: loadSql('62_find_student_internships_official.sql'),
    FIND_STUDENT_INTERNSHIPS: loadSql('62_find_student_internships.sql'),
    FIND_STUDENT_INTERNSHIP_YEAR: loadSql('62_find_student_internships_year.sql'),
    FIND_STUDENT_REPORT: loadSql('62_find_student_report.sql'),
    FIND_STUDENT_REPORTS: loadSql('62_find_student_reports.sql'),

    CREATE_NEW_TEACHER: loadSql('63_insert_new_teacher.sql'),

    CREATE_NEW_COMPANY: loadSql('64_insert_new_company.sql'),
    CREATE_NEW_SUBJECT: loadSql('65_insert_new_subject.sql'),
    CREATE_NEW_CLASS: loadSql('66_insert_new_class.sql'),
    CREATE_NEW_SECTION: loadSql('66_insert_new_section.sql'),
    CREATE_NEW_BRANCH: loadSql('67_insert_new_branch.sql'),
    CREATE_NEW_INTERNSHIP: loadSql('68_insert_new_internship.sql'),
    CREATE_NEW_DEPARTMENT_HEAD: loadSql('123_insert_new_department_head.sql'),
    CREATE_NEW_DEPARTMENT: loadSql('124_insert_new_department.sql'),
    CREATE_NEW_FACULTY: loadSql('125_insert_new_faculty.sql'),
    CREATE_NEW_FACULTY_GROUP: loadSql('126_insert_new_faculty_group.sql'),
    CREATE_NEW_ACADEMIC_YEAR: loadSql('127_insert_new_academic_year.sql'),
    CREATE_NEW_ACADEMIC_SEMESTER: loadSql('128_insert_new_academic_semester.sql'),
    CREATE_NEW_ENG_OFFICIAL_INTERNSHIP: loadSql('129_insert_new_eng_official_internship.sql'),
    CREATE_NEW_REPORT: loadSql('130_insert_new_student_report.sql'),

    UPDATE_STUDENT: loadSql('201_update_student.sql'),
    UPDATE_UNDERGRAD: loadSql('201_update_undergrad.sql'),
    UPDATE_TEACHER: loadSql('202_update_teacher.sql'),
    UPDATE_MANAGEMENTSHIP: loadSql('204_update_managementship.sql'),
    UPDATE_SUBJECT: loadSql('207_update_subject.sql'),
    UPDATE_CLASS: loadSql('208_update_class.sql'),
    UPDATE_SECTION: loadSql('209_update_section.sql'),
    UPDATE_DEPARTMENT: loadSql('210_update_department.sql'),
    UPDATE_FACULTY: loadSql('211_update_faculty.sql'),
    UPDATE_FACULTY_GROUP: loadSql('212_update_faculty_group.sql'),
    UPDATE_ACADEMIC_SEMESTER: loadSql('214_update_academic_semester.sql'),
    UPDATE_PAYMENT: loadSql('215_update_payment.sql'),
    UPDATE_COMPANY: loadSql('216_update_company.sql'),
    UPDATE_COMPANY_BRANCH: loadSql('217_update_company_branch.sql'),
    UPDATE_OFFER: loadSql('218_update_internship_offer.sql'),
    UPDATE_INTERNSHIP: loadSql('219_update_internship.sql'),
    UPDATE_REPORT: loadSql('221_update_report.sql'),

    FIND_TEACH_SCHEDULE : loadSql('70_teach_schedule.sql'),
    FIND_SEMESTER_IN_YEAR: loadSql('71_find_semester_in_year.sql'),
    FIND_SEMESTER: loadSql('71_find_semester.sql'),
    FIND_MOST_RECENT_MANAGE: loadSql('72_find_most_recent_manage.sql'),
    
    DELETE_MANAGEMENTSHIP: loadSql('200_delete_managementship.sql'),
}
