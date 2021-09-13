const Redmi = require('../models/redmi');
  exports.getRedmis = (req, res) => {
    Redmi.find({}, (error, foundRedmis) => {
      if (error) {
        return Redmi
        .sendError(res, { status: 422, detail: 'Cannot retrieve redmi data!'});
      }
  
      return res.json(foundRedmis);
    })
  }
  
  exports.getRedmiById = (req, res) => {
    const { redmiId } = req.params;
    Redmi.findById(redmiId, (error, foundRedmi) => {
      if (error) {
        return Redmi
        .sendError(res, { status: 422, detail: 'Cannot retrieve redmi data!'});
      }
      return res.json(foundRedmi)
    })
  }
  
  exports.createRedmi = (req, res) => {
    const redmiData = req.body;
    Redmi.create(redmiData, (error, createdRedmi) => {
      if (error) {
        return Redmi
        .sendError(res, { status: 422, detail: 'Cannot post redmi data!'});
      }
  
      return res.json({message: `Redmi with id: ${createdRedmi._id} was added!`});
    })
  }
  
  