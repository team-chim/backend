const express = require('express')
const router = express.Router()

/* Companies */
router.get('/', require('../controllers/get_companies'));
router.put('/', require('../controllers/put_new_company'));
router.get('/:compid', require('../controllers/get_company'));
router.patch('/:compid', require('../controllers/patch_company'));
router.delete('/:compid', require('../controllers/delete_company'));

/* Branches */
router.get('/:compid/branches', require('../controllers/get_company_branches'));
router.put('/:compid/branches', require('../controllers/put_new_branch'));
router.get('/:compid/branches/:brid', require('../controllers/get_branch_details'));
router.patch('/:compid/branches/:brid', require('../controllers/patch_branch_details'));
router.delete('/:compid/branches/:brid', require('../controllers/delete_branch'));
router.get('/:compid/reviews', require('../controllers/get_company_review'));

module.exports = router