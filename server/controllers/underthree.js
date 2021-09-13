const Underthree = require('../models/underthree');
  exports.getUnderthrees = (req, res) => {
    Underthree.find({}, (error, foundUnderthrees) => {
      if (error) {
        return Underthree
        .sendError(res, { status: 422, detail: 'Cannot retrieve underthree data!'});
      }
  
      return res.json(foundUnderthrees);
    })
  }
  
  exports.getUnderthreeById = (req, res) => {
    const { underthreeId } = req.params;
    Underthree.findById(underthreeId, (error, foundUnderthree) => {
      if (error) {
        return Underthree
        .sendError(res, { status: 422, detail: 'Cannot retrieve underthree data!'});
      }
      return res.json(foundUnderthree)
    })
  }
  
  exports.createUnderthree = (req, res) => {
    const underthreeData = req.body;
    Underthree.create(underthreeData, (error, createdUnderthree) => {
      if (error) {
        return Underthree
        .sendError(res, { status: 422, detail: 'Cannot post underthree data!'});
      }
  
      return res.json({message: `Underthree with id: ${createdUnderthree._id} was added!`});
    })
  }
  
  