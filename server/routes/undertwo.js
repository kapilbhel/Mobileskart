const express = require('express');
const router = express.Router();


const { 
  getUndertwos,
  getUndertwoById,
  createUndertwo,} = require('../controllers/undertwo');

router.get('', getUndertwos);
router.get('/:undertwoId', getUndertwoById);
router.post('', createUndertwo);
module.exports = router;