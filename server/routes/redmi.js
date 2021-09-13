const express = require('express');
const router = express.Router();


const { 
  getRedmis,
  getRedmiById,
  createRedmi,} = require('../controllers/redmi');

router.get('', getRedmis);
router.get('/:redmiId', getRedmiById);
router.post('', createRedmi);
module.exports = router;