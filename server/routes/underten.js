const express = require('express');
const router = express.Router();


const { 
  getUndertens,
  getUndertenById,
  createUnderten,} = require('../controllers/underten');

router.get('', getUndertens);
router.get('/:undertenId', getUndertenById);
router.post('', createUnderten);
module.exports = router;