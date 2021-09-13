const Mobile = require('../models/mobile');
  exports.getMobiles = (req, res) => {
    Mobile.find({}, (error, foundMobiles) => {
      if (error) {
        return Mobile
        .sendError(res, { status: 422, detail: 'Cannot retrieve mobbile data!'});
      }
  
      return res.json(foundMobiles);
    })
  }
  
  exports.getMobileById = (req, res) => {
    const { mobileId } = req.params;
    Mobile.findById(mobileId, (error, foundMobile) => {
      if (error) {
        return Mobile
        .sendError(res, { status: 422, detail: 'Cannot retrieve mobile data!'});
      }
      return res.json(foundMobile)
    })
  }
  
  exports.createMobile = (req, res) => {
    const mobileData = req.body;
    Mobile.create(mobileData, (error, createdMobile) => {
      if (error) {
        return Mobile
        .sendError(res, { status: 422, detail: 'Cannot post mobile data!'});
      }
  
      return res.json({message: `Mobile with id: ${createdMobile._id} was added!`});
    })
  }
  
  