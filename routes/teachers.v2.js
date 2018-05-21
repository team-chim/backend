const express = require('express')
const router = express.Router()

/* Teachers */
router.get('/', require('../controllers/get_teachers'));
router.put('/', require('../controllers/put_new_teacher'));
router.get('/:tid', require('../controllers/get_teacher_details'));
router.patch('/:tid', require('../controllers/patch_teacher_details'));
router.delete('/:tid', require('../controllers/delete_teacher'));
router.get('/:tid/advisees', require('../controllers/get_student_under_advisor'));

/* Teacher Schedule */
router.get('/:tid/schedules/teach', require('../controllers/get_teach_schedule'));
router.get('/:tid/schedules/teach/:year', require('../controllers/get_teach_schedule'));
router.get('/:tid/schedules/teach/:year/:semester', require('../controllers/get_teach_schedule'));

module.exports = router