const mongoose = require('mongoose');

const invitesSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'plz give email']
  },
  laden: {
    type: String,
    enum: ['cat', 'sau', 'sc', 'usta'],
    required: [true, "can't be blank"],
  },
  randomString: {
    type: String,
    required: [true, 'need randcode']
  },
});

const Invites = mongoose.model('Invites', invitesSchema);

module.exports = Invites;
