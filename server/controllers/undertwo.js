const Undertwo = require('../models/undertwo');
  exports.getUndertwos = (req, res) => {
    Undertwo.find({}, (error, foundUndertwos) => {
      if (error) {
        return Undertwo
        .sendError(res, { status: 422, detail: 'Cannot retrieve undertwo data!'});
      }
  
      return res.json(foundUndertwos);
    })
  }
  
  exports.getUndertwoById = (req, res) => {
    const { undertwoId } = req.params;
    Undertwo.findById(undertwoId, (error, foundUndertwo) => {
      if (error) {
        return Undertwo
        .sendError(res, { status: 422, detail: 'Cannot retrieve undertwo data!'});
      }
      return res.json(foundUndertwo)
    })
  }
  
  exports.createUndertwo = (req, res) => {
    const undertwoData = req.body;
    Undertwo.create(undertwoData, (error, createdUndertwo) => {
      if (error) {
        return Undertwo
        .sendError(res, { status: 422, detail: 'Cannot post undertwo data!'});
      }
  
      return res.json({message: `Undertwo with id: ${createdUndertwo._id} was added!`});
    })
  }
  
  