const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  recipes: [{
      type: mongoose.Types.ObjectId,
      ref: 'recipe',
      required: false
    }],
  
}, { timestamps: true });

module.exports = mongoose.model('account', accountSchema);