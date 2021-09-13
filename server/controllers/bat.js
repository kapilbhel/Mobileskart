const Bat = require('../models/bat');
  exports.getBats = (req, res) => {
    Bat.find({}, (error, foundBats) => {
      if (error) {
        return Bat
        .sendError(res, { status: 422, detail: 'Cannot retrieve bat data!'});
      }
  
      return res.json(foundBats);
    })
  }
  
  exports.getBatById = (req, res) => {
    const { batId } = req.params;
    Bat.findById(batId, (error, foundBat) => {
      if (error) {
        return Bat
        .sendError(res, { status: 422, detail: 'Cannot retrieve bat data!'});
      }
      return res.json(foundBat)
    })
  }
  
  exports.createBat = (req, res) => {
    const batData = req.body;
    Bat.create(batData, (error, createdBat) => {
      if (error) {
        return Bat
        .sendError(res, { status: 422, detail: 'Cannot post bat data!'});
      }
  
      return res.json({message: `Bat with id: ${createdBat._id} was added!`});
    })
  }
  
  