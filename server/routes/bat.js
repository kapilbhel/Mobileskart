const express = require('express');
const router = express.Router();


const { 
  getBats,
  getBatById,
  createBat,} = require('../controllers/bat');

router.get('', getBats);
router.get('/:batId', getBatById);
router.post('', createBat);
module.exports = router;