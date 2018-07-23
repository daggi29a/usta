const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  email: {
    type: String,
    required: [true, 'plz give email']
  },
  laden: {
    type: String,
    enum: ['cat', 'sau', 'sc', 'usta'],
    required: [true, "Ein Ort wird benötigt"],
  },
  firstname: String,
  lastname: String,
  tel: String,
  isActive: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  randomString: String,
  pictureUrl: String,
},
{timestamps: true});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});
// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
