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
  // lajkovite treba da se niza od idinja na accounti koi
  // go lajknale i posle na front da proveruvam dali acc-tot
  // so toa id go ima lajknato receptot
  // .length na nizata za da se prikaze kolku lajka se 
  likes: [{
    type: mongoose.Types.ObjectId,
    required: false
  }],
  image: {
    type: String
  },
  account: {
    ref: 'account',
    type: mongoose.Types.ObjectId
  }
  
}, { timestamps: true });

module.exports = mongoose.model('recipe', recipeSchema);