const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer'
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'shop'
  },
  date: {
    type: String,
    default: null
  },
  time: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  accepted: {
    type: Boolean,
    default: false
  },
  declined: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('appointment', AppointmentSchema);