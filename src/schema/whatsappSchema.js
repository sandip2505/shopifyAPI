const mongoose = require('mongoose');

const whatsappSchema = new mongoose.Schema({
  mobile_number: { 
    type: String,
    unique: true
  },
  position: {
    type: String,
  },
  prefield_message: {
    type: String,
  },
  icon: {
    type: String,
  },
  popup_message: {
    type: String,
  },
  status:{
    type: Boolean,
    default: true
  },
  createdAt: { 
    type: Date,
    default: Date.now
  },
  updatedAt: { 
    type: Date,
    default: Date.now
  },
  deletedAt: { 
    type: Date,
    default: null
  },
});



const WhatsApp = mongoose.model('whatsapp', whatsappSchema);

module.exports = WhatsApp;
