const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId
  },
  shop: {
    type: Schema.Types.ObjectId
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  decline: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('appointment', AppointmentSchema);