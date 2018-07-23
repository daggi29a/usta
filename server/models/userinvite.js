const mongoose = require('mongoose');

const userInviteSchema = new mongoose.Schema({

  email: {
    type: String,
    required: [true, 'plz give email']
  },
  token: String,
  isActive: {
    type: Boolean,
    default: false,
    }
  },
{timestamps: true});



const UserInvite = mongoose.model('UserInvite', userInviteSchema);

module.exports = UserInvite;
