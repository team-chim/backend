const express = require('express')
const router = express.Router()

/* Students */
router.get('/', require('../controllers/get_students'));
router.put('/undergrad', require('../controllers/put_new_undergrad'));
router.patch('/undergrad', require('../controllers/patch_undergrad_details'));
router.put('/grad', require('../controllers/put_new_grad'));
router.patch('/grad', require('../controllers/patch_grad_details'));
router.get('/:stuid', require('../controllers/get_student_details'));
router.delete('/:stuid', require('../controllers/delete_student'));

/* Student - Course Registration */
router.get('/:stuid/registered', require('../controllers/get_registered_subjects'));
router.put('/:stuid/registered/register', require('../controllers/register_subject'));
router.put('/:stuid/registered/withdraw', require('../controllers/withdraw_subject'));
router.put('/:stuid/registered/drop', require('../controllers/drop_subject'));
router.get('/:stuid/registered/:year', require('../controllers/get_registered_subjects'));
router.get('/:stuid/registered/:year/:semester', require('../controllers/get_registered_subjects'));

/* Student - Schedules */
router.get('/:stuid/schedules/study', require('../controllers/get_study_schedule'));
router.get('/:stuid/schedules/study/:year', require('../controllers/get_study_schedule'));
router.get('/:stuid/schedules/study/:year/:semester', require('../controllers/get_study_schedule'));
router.get('/:stuid/schedules/final', require('../controllers/get_final_schedule'));
router.get('/:stuid/schedules/final/:year', require('../controllers/get_final_schedule'));
router.get('/:stuid/schedules/final/:year/:semester', require('../controllers/get_final_schedule'));
router.get('/:stuid/schedules/midterm', require('../controllers/get_midterm_schedule'));
router.get('/:stuid/schedules/midterm/:year', require('../controllers/get_midterm_schedule'));
router.get('/:stuid/schedules/midterm/:year/:semester', require('../controllers/get_midterm_schedule'));

/* Student - Financial */
router.get('/:stuid/fee', require('../controllers/get_student_fee'));
router.get('/:stuid/payments', require('../controllers/get_payment_status'));
router.put('/:stuid/payments', require('../controllers/put_new_payment'));
router.patch('/:stuid/payments', require('../controllers/patch_payment'));
router.delete('/:stuid/payments', require('../controllers/delete_payment'));

/* Student - Internship */
router.get('/:stuid/internships', require('../controllers/get_student_internships'));
router.put('/:stuid/internships', require('../controllers/put_new_internship'));
router.patch('/:stuid/internships', require('../controllers/patch_internship'));
router.delete('/:stuid/internships', require('../controllers/delete_internship'));
router.get('/:stuid/internships/:year', require('../controllers/get_student_internships'));

/* Student - Official Internship */
router.get('/:stuid/official_internship', require('../controllers/get_student_official_internship')); 
router.put('/:stuid/official_internship', require('../controllers/put_new_student_official_internship')); 
router.delete('/:stuid/official_internship', require('../controllers/delete_official_internship'));
router.get('/:stuid/official_internship/reports', require('../controllers/get_student_reports')); 
router.put('/:stuid/official_internship/reports', require('../controllers/put_new_student_report')); 
router.get('/:stuid/official_internship/reports/:repno', require('../controllers/get_student_reports')); 
router.delete('/:stuid/official_internship/reports/:repno', require('../controllers/delete_student_report')); 

module.exports = router