const express = require('express');
const router = express.Router();


const { 
  getMotos,
  getMotoById,
  createMoto,} = require('../controllers/moto');

router.get('', getMotos);
router.get('/:motoId', getMotoById);
router.post('', createMoto);
module.exports = router;