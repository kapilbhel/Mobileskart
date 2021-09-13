const express = require('express');
const router = express.Router();


const { 
  getSamsungs,
  getSamsungById,
  createSamsung,} = require('../controllers/samsung');

router.get('', getSamsungs);
router.get('/:samsungId', getSamsungById);
router.post('', createSamsung);
module.exports = router;