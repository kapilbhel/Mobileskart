const Underten = require('../models/underten');
  exports.getUndertens = (req, res) => {
    Underten.find({}, (error, foundUndertens) => {
      if (error) {
        return Underten
        .sendError(res, { status: 422, detail: 'Cannot retrieve underten data!'});
      }
  
      return res.json(foundUndertens);
    })
  }
  
  exports.getUndertenById = (req, res) => {
    const { undertenId } = req.params;
    Underten.findById(undertenId, (error, foundUnderten) => {
      if (error) {
        return Underten
        .sendError(res, { status: 422, detail: 'Cannot retrieve underten data!'});
      }
      return res.json(foundUnderten)
    })
  }
  
  exports.createUnderten = (req, res) => {
    const undertenData = req.body;
    Underten.create(undertenData, (error, createdUnderten) => {
      if (error) {
        return Underten
        .sendError(res, { status: 422, detail: 'Cannot post underten data!'});
      }
  
      return res.json({message: `Underten with id: ${createdUnderten._id} was added!`});
    })
  }
  
  