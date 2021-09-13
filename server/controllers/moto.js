const Moto = require('../models/moto');
  exports.getMotos = (req, res) => {
    Moto.find({}, (error, foundMotos) => {
      if (error) {
        return Moto
        .sendError(res, { status: 422, detail: 'Cannot retrieve moto data!'});
      }
  
      return res.json(foundMotos);
    })
  }
  
  exports.getMotoById = (req, res) => {
    const { motoId } = req.params;
    Moto.findById(motoId, (error, foundMoto) => {
      if (error) {
        return Moto
        .sendError(res, { status: 422, detail: 'Cannot retrieve moto data!'});
      }
      return res.json(foundMoto)
    })
  }
  
  exports.createMoto = (req, res) => {
    const motoData = req.body;
    Moto.create(motoData, (error, createdMoto) => {
      if (error) {
        return Moto
        .sendError(res, { status: 422, detail: 'Cannot post moto data!'});
      }
  
      return res.json({message: `Moto with id: ${createdMoto._id} was added!`});
    })
  }
  
  