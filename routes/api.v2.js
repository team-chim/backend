const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

/* Academic Year & Semesters */
router.get('/academic/years', require('../controllers/get_academic_years'));
router.put('/academic/years', require('../controllers/put_new_academic_year'));
router.get('/academic/years/:year', require('../controllers/get_academic_years'));
router.get('/academic/years/:year/semesters', require('../controllers/get_academic_semesters'));
router.put('/academic/years/:year/semesters', require('../controllers/put_new_academic_semester'));
router.get('/academic/years/:year/semesters/:semester', require('../controllers/get_academic_semesters'));

/* Student */
router.get('/students', require('../controllers/get_students'));
router.put('/students/undergrad', require('../controllers/put_new_undergrad'));
router.patch('/students/undergrad/', require('../controllers/patch_undergrad_details'));
router.put('/students/grad', require('../controllers/put_new_grad'));
router.patch('/students/grad/', require('../controllers/patch_grad_details'));
router.get('/students/:stuid', require('../controllers/get_student_details'));
router.delete('/students/:stuid', require('../controllers/delete_student'));
router.get('/students/:stuid/registered', require('../controllers/get_registered_subjects'));
router.put('/students/:stuid/registered/register', require('../controllers/register_subject'));
router.put('/students/:stuid/registered/withdraw', require('../controllers/withdraw_subject'));
router.put('/students/:stuid/registered/drop', require('../controllers/drop_subject'));
router.get('/students/:stuid/registered/:year', require('../controllers/get_registered_subjects'));
router.get('/students/:stuid/registered/:year/:semester', require('../controllers/get_registered_subjects'));
// Edit Student Details

/* Student Schedules */
router.get('/students/:stuid/schedules/study', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year/:semester', require('../controllers/get_study_schedule'));

router.get('/students/:stuid/schedules/final', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year/:semester', require('../controllers/get_final_schedule'));

router.get('/students/:stuid/schedules/midterm', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year/:semester', require('../controllers/get_midterm_schedule'));

/* Student Financial */
router.get('/students/:stuid/fee', require('../controllers/get_student_fee'));
router.get('/students/:stuid/payments', require('../controllers/get_payment_status'));
router.put('/students/:stuid/payments', require('../controllers/put_new_payment'));

/* Student Internship */
router.get('/students/:stuid/internships', require('../controllers/get_student_internships'));
router.put('/students/:stuid/internships', require('../controllers/put_new_internship'));
router.get('/students/:stuid/internships/:year', require('../controllers/get_student_internships'));
router.get('/students/:stuid/official_internship', require('../controllers/get_student_official_internship')); 
router.get('/students/:stuid/official_internship/reports', require('../controllers/get_student_reports')); 
router.put('/students/:stuid/official_internship/reports', require('../controllers/put_new_student_report')); 
router.get('/students/:stuid/official_internship/reports/:repno', require('../controllers/get_student_reports')); 
router.put('/students/:stuid/official_internship', require('../controllers/put_new_student_official_internship')); 

/* Subject */
router.get('/subjects', require('../controllers/get_subjects'));
router.put('/subjects', require('../controllers/put_new_subject'));
router.get('/subjects/:subid', require('../controllers/get_subject'));
router.delete('/subjects/:subid', require('../controllers/delete_subject'));
router.get('/subjects/:subid/:year/:semester', require('../controllers/get_subject'));
router.put('/subjects/:subid/:year/:semester', require('../controllers/put_new_class'));
router.get('/subjects/:subid/:year/:semester/sections', require('../controllers/get_sections'));
router.put('/subjects/:subid/:year/:semester/sections', require('../controllers/put_new_section'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno', require('../controllers/get_section_detail'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno/students', require('../controllers/get_student_in_section'));

/* Teacher */
router.get('/teachers', require('../controllers/get_teachers'));
router.put('/teachers', require('../controllers/put_new_teacher'));
router.get('/teachers/:tid', require('../controllers/get_teacher_details'));
// router.patch('/teachers/:tid', require('../controllers/patch_teacher_details'));
router.delete('/teachers/:tid', require('../controllers/delete_teacher'));
router.get('/teachers/:tid/advisees', require('../controllers/get_student_under_advisor'));
router.get('/teachers/:tid/schedules/teach', require('../controllers/get_teach_schedule'));
router.get('/teachers/:tid/schedules/teach/:year', require('../controllers/get_teach_schedule'));
router.get('/teachers/:tid/schedules/teach/:year/:semester', require('../controllers/get_teach_schedule'));
// Edit Teacher Details

/* Staff Functionalities */
router.get('/students/unpaid', require('../controllers/get_unpaid_students'));
router.get('/students/official_internships/:year', require('../controllers/get_all_official_internship_year')); 
router.get('/offers', require('../controllers/get_offers'));
router.put('/offers', require('../controllers/put_new_offer'));

/* Faculty & Department */
router.get('/faculties', require('../controllers/get_faculties'));
router.put('/faculties', require('../controllers/put_new_faculty'));
router.get('/faculties/:fid', require('../controllers/get_faculty'));
router.get('/faculties/:fid/departments', require('../controllers/get_departments'));
router.put('/faculties/:fid/departments', require('../controllers/put_new_department'));
router.get('/faculties/:fid/departments/:depid', require('../controllers/get_department'));
router.get('/faculties/:fid/departments/:depid/head', require('../controllers/get_department_head'));
router.put('/faculties/:fid/departments/:depid/head', require('../controllers/put_new_department_head'));
router.delete('/faculties/:fid/departments/:depid/head', require('../controllers/delete_managementship'));
router.get('/faculties/:fid/departments/:depid/teachers', require('../controllers/get_department_teachers'));

/* Faculty Groups */
router.get('/faculty_groups', require('../controllers/get_faculty_groups'));
router.put('/faculty_groups', require('../controllers/put_new_faculty_group'));
router.get('/faculty_groups/:fgid', require('../controllers/get_faculty_groups'));

/* Company & Branch */
router.get('/companies', require('../controllers/get_companies'));
router.put('/companies', require('../controllers/put_new_company'));
router.get('/companies/:compid', require('../controllers/get_company'));
router.put('/companies/:compid/branches', require('../controllers/put_new_branch'));
router.get('/companies/:compid/branches', require('../controllers/get_company_branches'));
router.get('/companies/:compid/branches/:brid', require('../controllers/get_branch_details'));
router.get('/companies/:compid/reviews', require('../controllers/get_company_review'));


module.exports = router