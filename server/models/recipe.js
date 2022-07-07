const mongoose = require('mongoose');


const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  preparation_time: {
    type: Number,
    required: true  
  },
  no_people: {
    type: Number,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  short_description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    require: false
  },
  image: {
    type: String
  },
  account: {
    ref: 'account',
    type: mongoose.Types.ObjectId
  }
  
}, { timestamps: true });

module.exports = mongoose.model('recipe', recipeSchema);