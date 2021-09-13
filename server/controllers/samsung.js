const Samsung = require('../models/samsung');
  exports.getSamsungs = (req, res) => {
    Samsung.find({}, (error, foundSamsungs) => {
      if (error) {
        return Samsung
        .sendError(res, { status: 422, detail: 'Cannot retrieve Samsung data!'});
      }
  
      return res.json(foundSamsungs);
    })
  }
  
  exports.getSamsungById = (req, res) => {
    const { samsungId } = req.params;
    Samsung.findById(samsungId, (error, foundSamsung) => {
      if (error) {
        return Samsung
        .sendError(res, { status: 422, detail: 'Cannot retrieve samsung data!'});
      }
      return res.json(foundSamsung)
    })
  }
  
  exports.createSamsung = (req, res) => {
    const samsungData = req.body;
    Samsung.create(samsungData, (error, createdSamsung) => {
      if (error) {
        return Samsung
        .sendError(res, { status: 422, detail: 'Cannot post samsung data!'});
      }
  
      return res.json({message: `Samsung with id: ${createdSamsung._id} was added!`});
    })
  }
  
  