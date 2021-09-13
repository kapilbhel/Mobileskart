const Camera = require('../models/camera');
  exports.getCameras = (req, res) => {
    Camera.find({}, (error, foundCameras) => {
      if (error) {
        return Camera
        .sendError(res, { status: 422, detail: 'Cannot retrieve camera data!'});
      }
  
      return res.json(foundCameras);
    })
  }
  
  exports.getCameraById = (req, res) => {
    const { cameraId } = req.params;
    Camera.findById(cameraId, (error, foundCamera) => {
      if (error) {
        return Camera
        .sendError(res, { status: 422, detail: 'Cannot retrieve camera data!'});
      }
      return res.json(foundCamera)
    })
  }
  
  exports.createCamera = (req, res) => {
    const cameraData = req.body;
    Camera.create(cameraData, (error, createdCamera) => {
      if (error) {
        return Camera
        .sendError(res, { status: 422, detail: 'Cannot post camera data!'});
      }
  
      return res.json({message: `Camera with id: ${createdCamera._id} was added!`});
    })
  }
  
  