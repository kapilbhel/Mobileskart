const express = require('express');
const router = express.Router();


const { 
  getMobiles,
  getMobileById,
  createMobile,} = require('../controllers/mobile');

router.get('', getMobiles);
router.get('/:mobileId', getMobileById);
router.post('', createMobile);
module.exports = router;