const express = require('express')
const router = express.Router()

/* Faculties */
router.get('/', require('../controllers/get_faculties'));
router.put('/', require('../controllers/put_new_faculty'));
router.get('/:fid', require('../controllers/get_faculty'));
router.patch('/:fid', require('../controllers/patch_faculty'));
router.delete('/:fid', require('../controllers/delete_faculty'));

/* Departments */
router.get('/:fid/departments', require('../controllers/get_departments'));
router.put('/:fid/departments', require('../controllers/put_new_department'));
router.get('/:fid/departments/:depid', require('../controllers/get_department'));
router.patch('/:fid/departments/:depid', require('../controllers/patch_department'));
router.delete('/:fid/departments/:depid', require('../controllers/delete_department'));

/* Head of Department */
router.get('/:fid/departments/:depid/head', require('../controllers/get_department_head'));
router.put('/:fid/departments/:depid/head', require('../controllers/put_new_department_head'));
router.patch('/:fid/departments/:depid/head', require('../controllers/patch_managementship'));
router.delete('/:fid/departments/:depid/head', require('../controllers/delete_managementship'));

router.get('/:fid/departments/:depid/teachers', require('../controllers/get_department_teachers'));

module.exports = router