const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('shop', ShopSchema);