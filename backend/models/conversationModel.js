const mongoose = require('mongoose');

// User Post Scheme
const conversationSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  senderPicture:{
    type: String,
    required: true
  },
  receiverPicture:{
    type: String,
    required: true
  },
  senderName: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('Conversations', conversationSchema);