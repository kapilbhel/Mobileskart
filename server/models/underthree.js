const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const underthreeSchema = new Schema({
  name: { type: String, required: true },
  ram: { type: String, required: true },
  camera: { type: String, required: true },
  battery: { type: String, required: true },
  image: { type: String, required: true },
  image2: { type: String, required: true },
  display: { type: String, required: true },
  os: { type: String, required: true },
  memory: { type: String, required: true },
  price: { type: String, required: true }
})
underthreeSchema.statics.sendError = function(res, config) {
  const { status, detail } = config;
  return res
    .status(status)
    .send({errors: [{title: 'Underthree Error!', detail}]})
}
module.exports = mongoose.model('Underthree', underthreeSchema);