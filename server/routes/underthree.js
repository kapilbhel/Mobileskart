const express = require('express');
const router = express.Router();


const { 
  getUnderthrees,
  getUnderthreeById,
  createUnderthree,} = require('../controllers/underthree');

router.get('', getUnderthrees);
router.get('/:underthreeId', getUnderthreeById);
router.post('', createUnderthree);
module.exports = router;