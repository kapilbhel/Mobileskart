const express = require('express');
const router = express.Router();


const { 
  getCameras,
  getCameraById,
  createCamera,} = require('../controllers/camera');

router.get('', getCameras);
router.get('/:cameraId', getCameraById);
router.post('', createCamera);
module.exports = router;