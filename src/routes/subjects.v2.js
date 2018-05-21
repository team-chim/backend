const express = require('express')
const router = express.Router()

/* Subjects */
router.get('/', require('../controllers/get_subjects'));
router.put('/', require('../controllers/put_new_subject'));
router.get('/:subid', require('../controllers/get_subject'));
router.patch('/:subid', require('../controllers/patch_subject'));
router.delete('/:subid', require('../controllers/delete_subject'));

/* Class */
router.get('/:subid/:year/:semester', require('../controllers/get_subject'));
router.put('/:subid/:year/:semester', require('../controllers/put_new_class'));
router.patch('/:subid/:year/:semester', require('../controllers/patch_class'));
router.delete('/:subid/:year/:semester', require('../controllers/delete_class'));

/* Section */
router.get('/:subid/:year/:semester/sections', require('../controllers/get_sections'));
router.put('/:subid/:year/:semester/sections', require('../controllers/put_new_section'));
router.get('/:subid/:year/:semester/sections/:sectno', require('../controllers/get_section_detail'));
router.patch('/:subid/:year/:semester/sections/:sectno', require('../controllers/patch_section_detail'));
router.delete('/:subid/:year/:semester/sections/:sectno', require('../controllers/delete_section'));
router.get('/:subid/:year/:semester/sections/:sectno/students', require('../controllers/get_student_in_section'));

module.exports = router